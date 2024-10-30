**Nombre**: Leonardo Rikhardsson


## Observaciones

**Validaciones:** Se hizo una validación de número celular, pero solo en el caso de que fuera a ingresar uno, para que no ingrese uno incorrecto. El formato de número celular es de +56 y 9 dígitos mas.

**Imágenes:** Para la parte de información-producto, se hizo un href a las imágenes de 640x480 que manda a una foto de 1280x1024 pixeles, como fue mostrado en cátedra. Todas las imágenes fueron sacadas de [Unplash](https://unsplash.com) que son de uso libre. Y al momento de subir imágenes en agregar-producto, este solo acepta en formatos png y jpg.

**Productos:** En un principio, para seleccionar los productos, fue usada una checkbox, pero este fue cambiado por indicación de aux a usar selects, por ello decidí hacer 1 solo selector pero con elección múltiple (para escoger más de 1 producto se usa ctrl+click o shift+click). Podía hacer un boton que al agregar se generaran más selects hasta un tope de 5 pero pensé que no quedaría bien en la página y por simplicidad preferí dejarlo con 1 select multiple.

**data.js:** Es el archivo donde están los datos de frutas/verduras y regiones/comunas, pero copie estos datos en los archivos agregar-pedido y agregar-producto, como usar export/import que no sea usando servidores como Live Server no corría los js, por eso por precaución decidí también copiarlos a ambos archivos para que corra bien en cualquier método.