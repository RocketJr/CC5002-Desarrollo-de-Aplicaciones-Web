# Ejercicio 2
**Nombre**: Leonardo Rikhardsson

---

## Observaciones
Tenga en cuenta las siguientes observaciones al realizar el ejercicio:

- El ejercicio es de carácter **personal**; la copia será penalizada con **nota mínima**.
- De ser necesario investigar, usted esta **autorizado a utilizar internet** como herramienta. Sin embargo, **debe citar** toda fuente que utilice para responder las preguntas.
- El uso de modelos generativos de lenguaje como **ChatGPT está estrictamente prohibido** y será penalizado con **nota mínima**

## Pregunta 1

¿Qué es el ataque de "Cross Site Scripting" (XSS) y cómo podría prevenirse? Describa un escenario en el cual este tipo de ataque podría ser especialmente peligroso. Para responder esta pregunta, puede basarse en [este articulo de la OWASP](https://owasp.org/www-community/attacks/xss/).

**Respuesta**: El Cross Site Scripting consiste en que el atacante manda código malicioso desde aplicaciones web, donde inyecta scripts a sitios web de confianza. Se puede prevenir mediante validaciones de inputs, también lo que se llama "Output encoding" donde el texto no debe ser interpretado como código. También está lo que se llama HTML Sanitization, donde limpia/elimina cualquier HTML peligroso de una variable. Un escenario particular sería el robo de las cookies de tus datos ya sean bancarios y puedan robar toda tu información personal.

## Pregunta 2
Como se mencionó en auxiliar, existen varias herramientas que se pueden utilizar para programar aplicaciones web más complejas que las que hemos visto en el curso. Esta pregunta busca que ud. investigue 3 librerías de javascript o *frameworks* de front-end y describa sus principales características, ventajas, desventajas y ejemplos de uso. Finalmente, indique cuál de las tecnologías presentadas utilizaria para implementar su página web personal y por qué.

**Nota:** Se espera que ud. escriba un breve resumen de cada tecnología, seguido de al menos 2 ventajas y 2 desventajas de cada una.

**Respuesta**: 
1. El primer framework es React, este permite crear interfaces interactivas. React ofrece un renderizado rápido al utilizar Virtual DOM.
- Ventajas: Tiene una fácil integración y un syntax más simple.
- Desventajas: Tiene una pobre documentación, como siempre va cambiando y le van agregando más herramientas. Por lo mismo, con su gran crecimiento y cambios constantes, puede llegar a ser difícil de aprender.

2. El segundo framework es Angular, un framework creado por Google, para crear aplicaciones web dinámicas y una elección popular para proyectos escalables.
- Ventajas: Presenta una gran comunidad de desarrolladores, con una gran biblioteca de recursos y apoyo. Tiene una arquitectura basada en componentes, lo cual facilita la legibilidad del código.
- Desventajas: Se debe usar TypeScript para usar Angular, el cual tiene una mayor complejidad para entender a usarlo. Tiene un tamaño mayor, lo cual puede afectar en la carga inicial de aplicaciones, y por ende no es muy recomendable para aplicaciones más pequeñas.

3. Y por último tenemos Ember.js, open-source utilizado para crear aplicaciones web escalables para sitios web de empresas. Usadas por empresas como LinkedIn y Microsoft.
- Ventajas: Tiene compatibilidad con sus versiones anteriores, y tiene maneras sencillas para trabajar con los APIs.
- Desventajas: Es bastante complejo para aplicaciones grandes y para pequeñas es muy pesada. También tiene una mayor complejidad a la hora de aprender a usarlo, y puede llegar a ser más difícil de entender al principio. Gadhiya, M. (2024, marzo 5). 20 best JavaScript frameworks for 2024. LambdaTest. https://www.lambdatest.com/blog/best-javascript-frameworks/