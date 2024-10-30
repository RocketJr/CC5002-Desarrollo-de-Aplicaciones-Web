# Ejercicio 4: "*Unrestricted File Upload*"

**Nombre**: Leonardo Rikhardsson

--- 
## Introduccion
Hemos enfatizado la importancia de ser extremadamente cautelosos en el manejo de la entrada de los usuarios, incluyendo los archivos. De hecho, la vulnerabilidad [*Unrestricted File Upload*](https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload), la cual corresponde a confiar plenamente en los archivos subidos por el usuario, puede tener consecuencias catastróficas.

El objetivo de este ejercicio es comprender bien las posibles **consecuencias** de un manejo de archivos "mediocre" y las formas de **prevenirlas**.

### Pregunta 1
Investigue y explique **con sus propias palabras** 3 posibles ataques que un usuario malicioso podria realizar a una aplicacion web con la vulnerabilidad *Unrestricted File Upload*". Se espera que para cada ataque se mencionen las **consecuencias** del mismo.

**Respuesta:**
- Ataque1: Subir un archivo muy grande. Este tipo de ataques puede ocasionar que se consuma toda la memoria del disco del servidor, y provocar fallas en el sistema o hacer que los servidores esten mas lentos, resultando en una denegación de servicio (DoS).

- Ataque2: Subir un archivo malicioso de tipo jsp, php, asp que puedan ejecutar comandos en el servidor. El atacante puede llegar a obtener información de otros usuarios, como contraseñas o datos bancarios por ejemplo.

- Ataque3: Ataques del lado del cliente. En este tipo de ataques, se pueden llegar a subir archivos html con scripts maliciosos u imágenes con algún código, y hacen que el usuario sea vulnerable a robo de información y sean víctimas de ataques de Cross-Site Scripting (XSS).

### Pregunta 2
Ahora que ya tenemos claro que descuidar el manejo de archivos es peligroso, les pedimos listar 5 métodos preventivos para esta vulnerabilidad.

**Respuesta:**
- Asegurarse de que usuarios no autorizados no puedan acceder a los archivos cargados.
- Renombrar archivos que se suban, así generando archivos únicos y seguros antes de guardarlos en el servidor.
- Denegar el permiso de ejecución en el directorio cargado.
- Limitar el tamaño del archivo a un valor máximo para evitar ataques de denegación de servicio (en el espacio del archivo u otras funciones de la aplicación web, como el cambio de tamaño de imagen).
- Utilizar una lista blanca de extensiones de archivo permitidas y validar que los archivos subidos coincidan con estas extensiones.