# Ejercicio 5: AJAX y Spring

**Nombre**: Leonardo Rikhardsson

---
## Observaciones (Importante!)
Debido a la paralizacion y la consecuente acumulacion de evaluaciones, como equipo docente hemos decidido fusionar los ejercicios 5 y 6 en un solo ejercicio. En esta evaluacion **cada pregunta representa una nota de ejercicios**, por lo que se espera que responda **todas** las preguntas.

Adicionalmente, se mantienen las observaciones de los ejercicios 5 y 6 originales:

- El ejercicio es de carácter **personal**; la copia será penalizada con **nota mínima**.
- De ser necesario investigar, usted esta **autorizado a utilizar internet** como herramienta.
- El uso de modelos generativos de lenguaje como **ChatGPT está estrictamente prohibido** y será penalizado con **nota mínima**. 
- Recuerde incluir referencias para las preguntas de investigacion.

## Pregunta 1: CORS
A lo largo del curso hemos visto que el uso de **AJAX** es fundamental para el desarrollo de aplicaciones web modernas, permitiendo la comunicacion asincrona entre el cliente y el servidor. 

Un caso de uso comun de AJAX son las single-page applications (SPA), en donde los archivos estaticos (HTML, CSS y JS) asociados a la interfaz de usuario (UI) son solicitados de manera sincrona una sola vez a un servidor dedicado al front-end de la aplicacion, mientras que el resto de la interaccion se realiza mediante peticiones asincronas a una API REST, la cual se encarga de entregar los datos necesarios para la aplicacion, generalmente en formato JSON. 

Algo importante a notar es la nocion de **origen** en este escenario. Por ejemplo, si la SPA se encuentra en `http://www.example.com` y la API REST en `http://api.example.com`, se dice que las peticiones AJAX realizadas por la SPA son **cross-origin**, pues el origen de la aplicacion es diferente al origen de la API REST. Respecto a esto, los navegadores implementan una politica de seguridad llamada **Cross-Origin Resource Sharing (CORS)**.

El objetivo de esta pregunta es que ud. investigue y explique con sus propias palabras que es CORS, como funciona y por que es importante este mecanismo. Ademas, se pide que detalle un escenario en donde un atacante podria aprovecharse de un servidor que no haya configurado CORS correctamente para un recurso especifico.


**¿Qué es CORS?** *(1.5 pts)*

*Respuesta:* CORS (Cross-Origin Resource Sharing) es un mecanismo basado en cabeceras HTTP que permite a un servidor indicar si se tiene permitido cargar recursos a otro dominio de origen distinto. Info sacada de: [Mozilla Dev](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)

**¿Cómo funciona CORS?** *(1.5 pts)*  

*Respuesta:* CORS añade nuevas Cabeceras HTTP que permiten a los servidores describir qué orígenes tienen permiso para leer información de una pagina web. Info sacada de: [Mozilla Dev](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)

**Importancia de CORS:** *(1.5 pts)*

*Respuesta:* CORS protege de que sitios maliciosos interactúen con sitios legítimos. De esta forma protege a los usuarios de posibles robos de credenciales/informacion sensible. Info sacada de: [Cors-que-es-y-como-funciona](https://www.juannicolas.eu/cors-que-es-y-como-funciona/)

**Ejemplo de ataque:** *(1.5 pts)*

*Respuesta:* Un ataque puede ser por el Access-Control-Allow-Credentials, donde por ejemplo la victima visita una pagina maliciosa mientras esta autenticada en otro pagina, la pagina maliciosa descarga un scritp malicioso diseñado para interactuar con esta otra pagina y este es ejecutado sin saberlo, y este script ejecuta una solicitud de origen cruzado, como puede ser revelar la contraseña de la victima. Como la pagina que recibe el encabezado CORS está permitido con autenticación, deja pasar la solicitud maliciosa y los datos de la victima son enviados a la pagina maliciosa.


Anexo: `https://www.stackhawk.com/blog/what-is-cors/#at-a-bare-minimum` `https://aws.amazon.com/es/what-is/cross-origin-resource-sharing/` `https://portswigger.net/web-security/cors#vulnerabilities-arising-from-cors-configuration-issues` `https://ciberseguridad.com/amenzas/vulnerabilidades/ataques-cors/`

# Pregunta 2: Thymeleaf

Como hemos visto en los auxiliares de **Spring**, el *engine* de templates **Thymeleaf** permite a los desarrolladores crear "fragmentos" de HTML que pueden ser importados a distintas templates. El objetivo de esta pregunta es llevar a la practica lo anterior. Para ello ud. cuenta con una version incompleta de un fragmento en `fragment.html` y una version incompleta de una template en `index.html`. 

**Observacion:** Puede asumir que ambos archivos se encuentran en una misma carpeta.
 
**Respuesta:**
```html
<!-- fragment.html -->
<nav class="navbar" th:fragment="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
</nav>
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    [...]
  </head>
  <body>
    <!-- Aqui importar fragment.html -->
    <div th:replace="~{fragment :: navbar}"></div>
  </body>
</html>
```


