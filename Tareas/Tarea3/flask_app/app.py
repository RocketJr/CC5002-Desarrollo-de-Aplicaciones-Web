from flask import Flask, request, render_template, redirect, url_for, flash, jsonify
from flask_cors import cross_origin
from utils.validations import validate_productor, validate_comprador
from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os

UPLOAD_FOLDER = "static/uploads"

app = Flask(__name__)

app.secret_key = "secret_key"

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000 # 16 MB

@app.errorhandler(413)
def request_entity_too_large(error):
    return 'File exceeds the maximum file size allowed', 413

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/agregar-producto", methods=["GET", "POST"])
def agregar_producto():
    if request.method == 'POST':
        tipo = request.form.get("tipo-producto")
        productos = request.form.getlist("productos")
        descripcion = request.form.get("area-desc")
        fotos = request.files.getlist("photos")
        comuna = request.form.get("comuna")
        region = request.form.get("region")
        nombre = request.form.get("name")
        email = request.form.get("email")
        telefono = request.form.get("celular")
        
        is_valid, errors = validate_productor(tipo, productos, descripcion, comuna, region, nombre, email, telefono, fotos)
        
        if is_valid:
            status, msg, producto_id = db.register(tipo, descripcion, comuna, nombre, email, telefono)
            for foto in fotos:
                if foto:
                    _filename = hashlib.sha256(
                        secure_filename(foto.filename).encode("utf-8")
                    ).hexdigest()
                    _extension = filetype.guess(foto).extension
                    img_filename = f"{_filename}.{_extension}"
                    ruta_archivo = os.path.join(app.config["UPLOAD_FOLDER"], img_filename)
                    foto.save(ruta_archivo)
                    db.insert_foto(ruta_archivo, img_filename, producto_id)

            for producto in productos:
                if producto:
                    db.insert_producto_verdura_fruta(producto_id, producto)
            
            if status:
                flash("Hemos recibido el registro del producto. ¡Muchas gracias!", "success")
                return redirect(url_for("index"))
            else:
                errors.append(msg)
        else:
            errors.insert(0, "Error en los datos ingresados:")
        
        return render_template("agregar-producto.html", errors=errors)
    
    elif request.method == "GET":
        return render_template("agregar-producto.html")
    
@app.route("/ver-productos", methods=["GET"])
def ver_productos():
        page = request.args.get("page", 1, type=int)
        page_size = 5
        total_productos = db.get_rows_producto()
        max_page = (total_productos + page_size - 1) // page_size
        
        if total_productos == 0:
            return render_template("ver-productos.html", page=1, max_page=1, data=[])
        
        if page < 1:
            return redirect(url_for("ver_productos", page=1))
        elif page > max_page:
            return redirect(url_for("ver_productos", page=max_page))
        
        # get last 5 products 
        data = []
        for producto in db.get_productos_paginated(page, page_size=5):
            producto_id, tipo, _, comuna_id, _, _, _ = producto

            productos = db.get_tipos_asociados_producto(producto_id)
            region = db.get_region_name_by_comuna_id(comuna_id)
            comuna = db.get_comuna_nombre(comuna_id)

            fotos= db.get_fotos_producto(producto_id)
            _filenames = [foto[1] for foto in fotos]
            img_filenames = [f"uploads/{_filename}" for _filename in _filenames]
            path_images = [url_for('static', filename=img_filename) for img_filename in img_filenames]

            data.append({
                "id": producto_id,
                "tipo": tipo,
                "productos": productos,
                "region": region[0],
                "comuna": comuna[0],
                "photos": path_images
            })
        
        return render_template("ver-productos.html", data=data, page=page, max_page=max_page)

@app.route("/informacion-producto/<int:id>", methods=["GET"])
def informacion_producto(id):
    producto = db.get_producto_por_ids(id)
    if not producto:
        return redirect(url_for("ver_productos"))

    fotos = db.get_fotos_producto(id)
    _filenames = [foto[1] for foto in fotos]
    img_filenames = [f"uploads/{_filename}" for _filename in _filenames]
    path_images = [url_for('static', filename=img_filename) for img_filename in img_filenames]

    productos = db.get_tipos_asociados_producto(id)
    region = db.get_region_name_by_comuna_id(producto[2])
    comuna = db.get_comuna_nombre(producto[2])

    data = {
        "tipo": producto[0],
        "productos": productos,
        "region": region[0],
        "comuna": comuna[0],
        "descripcion": producto[1],
        "nombre": producto[3],
        "email": producto[4],
        "telefono": producto[5],
        "photos": path_images
    }
    
    return render_template("informacion-producto.html", data=data)

@app.route("/agregar-pedido", methods=["GET", "POST"])
def agregar_pedido():
    if request.method == 'POST':
        tipo = request.form.get("tipo-producto")
        productos = request.form.getlist("productos")
        descripcion = request.form.get("area-desc")
        comuna = request.form.get("comuna")
        region = request.form.get("region")
        nombre = request.form.get("name")
        email = request.form.get("email")
        telefono = request.form.get("celular")
        
        is_valid, errors = validate_comprador(tipo, productos, descripcion, comuna, region, nombre, email, telefono)
        
        if is_valid:
            status, msg, pedido_id = db.register_comprador(tipo, descripcion, comuna, nombre, email, telefono)

            for pedido in productos:
                if pedido:
                    db.insert_pedido_verdura_fruta(pedido, pedido_id)
            
            if status:
                flash("Hemos recibido el registro del pedido. ¡Muchas gracias!", "success")
                return redirect(url_for("index"))
            else:
                errors.append(msg)
        else:
            errors.insert(0, "Error en los datos ingresados:")
        
        return render_template("agregar-pedido.html", errors=errors)
    
    elif request.method == "GET":
        return render_template("agregar-pedido.html")

@app.route("/ver-pedidos", methods=["GET"])
def ver_pedidos():
        page = request.args.get("page", 1, type=int)
        page_size = 5
        total_pedidos = db.get_rows_pedido()
        max_page = (total_pedidos + page_size - 1) // page_size
        
        if total_pedidos == 0:
            return render_template("ver-pedidos.html", page=1, max_page=1, data=[])
        
        if page < 1:
            return redirect(url_for("ver_pedidos", page=1))
        elif page > max_page:
            return redirect(url_for("ver_pedidos", page=max_page))
        
        # get last 5 pedidos
        data = []
        for pedido in db.get_pedidos_paginated(page, page_size=5):
            pedido_id, tipo, _, comuna_id, nombre_comprador, _, _ = pedido

            productos = db.get_tipos_asociados_pedido(pedido_id)
            region = db.get_region_name_by_comuna_id(comuna_id)
            comuna = db.get_comuna_nombre(comuna_id)

            data.append({
                "id": pedido_id,
                "tipo": tipo,
                "productos": productos,
                "region": region[0],
                "comuna": comuna[0],
                "comprador": nombre_comprador,
            })
        
        return render_template("ver-pedidos.html", data=data, page=page, max_page=max_page)

@app.route("/informacion-pedido/<int:id>", methods=["GET"])
def informacion_pedido(id):
    pedido = db.get_pedido_por_ids(id)
    if not pedido:
        return redirect(url_for("ver_pedidos"))

    productos = db.get_tipos_asociados_pedido(id)
    region = db.get_region_name_by_comuna_id(pedido[2])
    comuna = db.get_comuna_nombre(pedido[2])

    data = {
        "tipo": pedido[0],
        "productos": productos,
        "region": region[0],
        "comuna": comuna[0],
        "descripcion": pedido[1],
        "nombre": pedido[3],
        "email": pedido[4],
        "telefono": pedido[5],
    }
    
    return render_template("informacion-pedido.html", data=data)

@app.route("/stats")
def stats():
    return render_template("stats.html")

@app.route("/get-stats-data", methods=["GET"])
@cross_origin(origin="localhost", supports_credentials=True)
def get_stats_data():
    datos_productos = db.stats_productos()
    datos_pedidos = db.stats_pedidos()
    return jsonify({"productos": datos_productos, "pedidos": datos_pedidos})

if __name__ == "__main__":
    app.run(debug=True)