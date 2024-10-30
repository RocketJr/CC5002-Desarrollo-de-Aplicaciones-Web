const fila1 = document.querySelectorAll("#fila1");
const fila2 = document.querySelectorAll("#fila2");
const fila3 = document.querySelectorAll("#fila3");
const fila4 = document.querySelectorAll("#fila4");
const fila5 = document.querySelectorAll("#fila5");

const goClick = () => {
    window.location.href = "../html/informacion-producto.html";
};

fila1.forEach((fila) => {
    fila.addEventListener("click", goClick);
});

fila2.forEach((fila) => {
    fila.addEventListener("click", goClick);
});

fila3.forEach((fila) => {
    fila.addEventListener("click", goClick);
});

fila4.forEach((fila) => {
    fila.addEventListener("click", goClick);
});

fila5.forEach((fila) => {
    fila.addEventListener("click", goClick);
});