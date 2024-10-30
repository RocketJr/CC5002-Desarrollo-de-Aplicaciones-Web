# Ejercicio 1

**Nombre**: Leonardo Rikhardsson

---
## Consideraciones
- Este ejercicio se debe realizar de manera individual.
- Puede usar internet, sus apuntes y cualquier material que desee siempre y cuando las respuestas esten escritas en sus propias palabras.
- Se encuentra **totalmente prohibido** utilizar modelos generativos del lenguaje tales como ChatGPT para resolver este ejercicio. Por medio de un software especializado, se revisará que su solución no haya sido plagiada. Aquellas entregas que presenten evidencia de plagio serán calificadas con la nota mínima.


## Pregunta 1
Explique por que el realizar validaciones del input del usuario en el front-end es una caracteristica pero no una medida de seguridad. 

**Respuesta**: No es una medida de seguridad, sino simplemente una facilidad. Porque este puede ser evitada de muchas formas, como por ejemplo modificar el código en el navegador, analizar los endpoints de las request, etc.

## Pregunta 2
Usted cuenta con el siguiente codigo HTML:
```html
<div>
    <p>Contador: <span id="contador">0</span></p>
    <button type="button" id="btn-resta">-1</button>
    <button type="button" id="btn-suma">+1</button>
</div>
```
Implemente un contador bidireccional utilizando la plantilla disponible mas abajo, solo programe donde se le indica. Se espera que tras apretar un boton, el contador se actualice sin la necesidad de recargar la pagina. **No esta permitido modificar el HTML**.

**Respuesta**:
```js
// se buscan los elementos necesarios
const textoContador = document.getElementById("contador");
const restaButton = document.getElementById("btn-resta");
const sumaButton = document.getElementById("btn-suma");

let n = 0; // contador

const suma = () => {
    n += 1;
    textoContador.innerText = n;
};

const resta = () => {
    n -= 1;
    textoContador.innerText = n;
};
// asignar respectivamente la funciones al evento "click"
restaButton.addEventListener("click", resta);
sumaButton.addEventListener("click", suma);
```
