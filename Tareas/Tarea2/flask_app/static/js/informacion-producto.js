const fotos = document.querySelectorAll(".producto-imagen");

const goClick = (foto) => {
    const imgElement = foto.target;
    if (imgElement.width === 640) {
        imgElement.width = 1280;
        imgElement.height = 1024;
    } else {
        imgElement.width = 640;
        imgElement.height = 480;
    }
};

fotos.forEach((foto) => {
    foto.addEventListener('click', goClick);
});