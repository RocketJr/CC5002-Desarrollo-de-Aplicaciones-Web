import filetype
from database import db

def validate_conf_img(conf_img):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    for img in conf_img:
        # check if a file was submitted
        if img is None:
            return False

        # check if the browser submitted an empty file
        if img.filename == "":
            return False
        
        # check file extension
        ftype_guess = filetype.guess(img)
        if ftype_guess.extension not in ALLOWED_EXTENSIONS:
            return False
        # check mimetype
        if ftype_guess.mime not in ALLOWED_MIMETYPES:
            return False
    return True

def validate_tipo_seleccionado(value):
    return value in ["fruta", "verdura"]

def validate_tipos(value):
    return value and 1 <= len(value) <= 5

def validate_name(value):
    return value and 3 <= len(value) <= 80

def validate_email(value):
    return "@" in value

def validate_phone(value):
    return value and 3 <= len(value) <= 12 or value == ""

def validate_desc(value):
    return 0 <= len(value) <= 300

#def validate_fruta_verdura(value):
#    for x in value:
#        productos = db.get_productos_verduras_frutas()
#        nombres_producos = [x[1] for x in productos]
#    return value in nombres_producos

def validate_region(value):
    regiones = db.get_regiones()
    nombres_regiones = [region[1] for region in regiones]
    return value in nombres_regiones

def validate_comuna(value1, value2):
    regiones = db.get_regiones()
    region_id = None
    for region in regiones:
        if region[1] == value1:
            region_id = region[0]
            break
    if region_id is None:
        return False
    comunas = db.get_comunas_por_region(region_id)
    nombres_comunas = [comuna[0] for comuna in comunas]
    return value2 in nombres_comunas

def validate_productor(tipo, tipos, desc, comuna, region, name, email, phone, imgs):
    errors = []
    
    if not validate_tipo_seleccionado(tipo):
        errors.append("Tipo de producto seleccionado no es válido.")
    if not validate_tipos(tipos):
        errors.append("Debe seleccionar entre 1 y 5 tipos de productos.")
    #if not validate_fruta_verdura(tipos):
    #    errors.append("Uno de los productos seleccionados no es válido.")
    if not validate_desc(desc):
        errors.append("La descripción debe tener entre 0 y 300 caracteres.")
    if not validate_region(region):
        errors.append("La región seleccionada no es válida.")
    if not validate_comuna(region, comuna):
        errors.append("La comuna seleccionada no es válida para la región dada.")
    if not validate_name(name):
        errors.append("El nombre debe tener entre 3 y 80 caracteres.")
    if not validate_email(email):
        errors.append("El correo electrónico no es válido.")
    if not validate_phone(phone):
        errors.append("El número de teléfono debe tener entre 3 y 12 caracteres o estar vacío.")
    if not validate_conf_img(imgs):
        errors.append("Al menos una de las imágenes no es válida.")
    
    return len(errors) == 0, errors

def validate_comprador(tipo, tipos, desc, comuna, region, name, email, phone):
    errors = []
    
    if not validate_tipo_seleccionado(tipo):
        errors.append("Tipo de producto seleccionado no es válido.")
    if not validate_tipos(tipos):
        errors.append("Debe seleccionar entre 1 y 5 tipos de productos.")
    if not validate_desc(desc):
        errors.append("La descripción debe tener entre 0 y 300 caracteres.")
    if not validate_region(region):
        errors.append("La región seleccionada no es válida.")
    if not validate_comuna(region, comuna):
        errors.append("La comuna seleccionada no es válida para la región dada.")
    if not validate_name(name):
        errors.append("El nombre debe tener entre 3 y 80 caracteres.")
    if not validate_email(email):
        errors.append("El correo electrónico no es válido.")
    if not validate_phone(phone):
        errors.append("El número de teléfono debe tener entre 3 y 12 caracteres o estar vacío.")
    
    return len(errors) == 0, errors