import pymysql

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

# -- conn ---

def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset=DB_CHARSET
	)
	return conn

# -- querys --
def insert_producto(tipo, descripcion, comuna, nombre_productor, email_productor, celular_productor):
    conn = get_conn()
    cursor = conn.cursor()
    comuna_id = get_comuna_id(comuna)
    cursor.execute("INSERT INTO producto (tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor) VALUES (%s, %s, %s, %s, %s, %s);", (tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor))
    conn.commit()
    cursor.execute("SELECT LAST_INSERT_ID();")
    return cursor.fetchone()
    
def get_productos():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor FROM producto ORDER BY id DESC;")
	productos = cursor.fetchall()
	return productos

def get_productos_paginated(page, page_size):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT id, tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor FROM producto ORDER BY id DESC LIMIT %s, %s;", ((page - 1) * page_size, page_size))
    productos = cursor.fetchall()
    return productos
    
def get_productos_with_comuna_name():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT PRO.id, PRO.tipo, PRO.descripcion, COM.nombre, PRO.nombre_productor, PRO.email_productor, PRO.celular_productor FROM producto PRO, comuna COM WHERE PRO.comuna_id = COM.id ORDER BY id DESC LIMIT 5, 5")
    productos = cursor.fetchall()
    return productos

def insert_producto_verdura_fruta(producto_id, nombre):
    conn = get_conn()
    cursor = conn.cursor()
    tipo_verdura_fruta_id = get_producto_verdura_fruta_id(nombre)
    cursor.execute("INSERT INTO producto_verdura_fruta (producto_id, tipo_verdura_fruta_id) VALUES (%s, %s);", (producto_id, tipo_verdura_fruta_id))
    conn.commit()

def get_producto_verdura_fruta_id(nombre):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM tipo_verdura_fruta WHERE nombre=%s;", (nombre,))
    id = cursor.fetchone()
    return id

def get_productos_verduras_frutas():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT id, nombre FROM tipo_verdura_fruta;")
    productos = cursor.fetchall()
    return productos
    
def get_tipos_asociados_producto(producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT TVF.nombre FROM tipo_verdura_fruta TVF, producto_verdura_fruta PVF WHERE TVF.id=PVF.tipo_verdura_fruta_id AND PVF.producto_id=%s;", (producto_id,))
    tipos = cursor.fetchall()
    return [tipo[0] for tipo in tipos]

def insert_foto(ruta_archivo, nombre_archivo, producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO foto (ruta_archivo, nombre_archivo, producto_id) VALUES (%s, %s, %s);", (ruta_archivo, nombre_archivo, producto_id))
    conn.commit()
    
def get_fotos_producto(producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT ruta_archivo, nombre_archivo FROM foto WHERE producto_id=%s;", (producto_id,))
    fotos = cursor.fetchall()
    return fotos

def get_last_inserted_id():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT LAST_INSERT_ID();")
    last_id = cursor.fetchone()
    return last_id

def get_regiones():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT id, nombre FROM region;")
	regiones = cursor.fetchall()
	return regiones

def get_comunas_por_region(region_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT nombre FROM comuna WHERE region_id=%s;", (region_id,))
	comunas = cursor.fetchall()
	return comunas

def get_comuna_id(nombre):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM comuna WHERE nombre=%s;", (nombre,))
    id = cursor.fetchone()
    return id

def get_comuna_nombre(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT nombre FROM comuna WHERE id=%s;", (id,))
    nombre = cursor.fetchone()
    return nombre

def get_region_nombre(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT region_id FROM comuna WHERE id=%s;", (id,))
    nombre = cursor.fetchone()
    return nombre

def get_region_name_by_comuna_id(comuna_id):
    conn = get_conn()
    cursor = conn.cursor()
    region_id = get_region_nombre(comuna_id)
    cursor.execute("SELECT nombre FROM region WHERE id=%s;", (region_id,))
    region_name = cursor.fetchone()
    return region_name

def get_rows_count():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM producto;")
    count = cursor.fetchone()
    return count[0]

def get_producto_por_ids(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute("SELECT tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor FROM producto WHERE id=%s;", (id,))
    nombre = cursor.fetchone()
    return nombre

def register(tipo, descripcion, comuna, nombre_productor, email_productor, celular_productor):
    producto_id = insert_producto(tipo, descripcion, comuna, nombre_productor, email_productor, celular_productor)
    return True, None, producto_id