import { datosProductos, regionesYcomunas } from '../js/data.js';

const cargarProductos = () => {
  let tipoProducto = document.getElementById("tipo-producto").value;
  let selectProductos = document.getElementById("productos");
  selectProductos.innerHTML = "";
  if (tipoProducto) {
      const productos = datosProductos[tipoProducto];
      productos.forEach(producto => {
          let option = document.createElement("option");
          option.setAttribute("name", producto);
          option.setAttribute("value", producto);
          option.setAttribute("id", producto);
          option.innerText = producto;
          selectProductos.appendChild(option);
      });
  }
};

const cargarRegiones = () => {
  const selectRegion = document.getElementById("region");
  for (const region in regionesYcomunas) {
      let option = document.createElement("option");
      option.setAttribute("name", region);
      option.setAttribute("value", region);
      option.setAttribute("id", region);
      option.innerText = region;
      selectRegion.appendChild(option);
  }
};

const cargarComunas = () => {
  let selectRegion = document.getElementById("region");
  let selectComuna = document.getElementById("comuna");
  let regionSeleccionada = selectRegion.value;
  selectComuna.innerHTML = '<option value="">Selecciona una comuna</option>';
  const comunas = regionesYcomunas[regionSeleccionada];
  if (comunas) {
      comunas.forEach(comuna => {
          let option = document.createElement("option");
          option.setAttribute("name", comuna);
          option.setAttribute("value", comuna);
          option.setAttribute("id", comuna);
          option.innerText = comuna;
          selectComuna.appendChild(option);
      });
  }
};

// --- Validation Functions ---

const validarCantidadProductos = () => {
  const selectProductos = document.getElementById("productos");
  return selectProductos.selectedOptions.length >= 1 && selectProductos.selectedOptions.length <= 5;
};

const validatePhotos = photos => {
  return photos && photos.length >= 1 && photos.length <= 3;
};

const validateEmail = email => {
  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateUserName = userName => userName && userName.length >= 3 && userName.length <= 80;

const validatePhone = celular => {
  const phoneRegex = /^\+56\d{9}$/;
  return phoneRegex.test(celular);
};

const validatePhotoExtensions = photos => {
  const validExtensions = ['jpg', 'jpeg', 'png'];
  for (let i = 0; i < photos.length; i++) {
      const fileExtension = photos[i].name.split('.').pop().toLowerCase();
      if (!validExtensions.includes(fileExtension)) {
          return false;
      }
  }
  return true;
};

// --- Form Handling ---

const handleFormSubmit = () => {
  console.log("Validating form...");

  const emailInput = document.getElementById("email");
  const userNameInput = document.getElementById("name");
  const phoneInput = document.getElementById("celular");
  const photosInput = document.getElementById("photos");
  const productoTipoSelect = document.getElementById("tipo-producto");
  const productoSelect = document.getElementById("productos");
  const regionSelect = document.getElementById("region");
  const comunaSelect = document.getElementById("comuna");

  let isValid = true;
  let errorMessage = "";

  if (!productoTipoSelect.value) {
    isValid = false;
    errorMessage += "Por favor, selecciona un producto.\n";
    productoTipoSelect.style.borderColor = "red";
  } else {
    productoTipoSelect.style.borderColor = "";
  }

  if (!validarCantidadProductos()) {
    isValid = false;
    errorMessage += "Por favor, selecciona entre 1 y 5 productos.\n";
    productoSelect.style.borderColor = "red";
  } else {
    productoSelect.style.borderColor = "";
  }

  const photos = photosInput.files;
  if (!validatePhotos(photos)) {
    isValid = false;
    errorMessage += "Por favor, selecciona al menos una foto y como máximo tres.\n";
    photosInput.style.borderColor = "red";
  } else {
    photosInput.style.borderColor = "";
  }

  if (!validatePhotoExtensions(photos)) {
    isValid = false;
    errorMessage += "Por favor, suba fotos con extensión .jpg o .png.\n";
    photosInput.style.borderColor = "red";
  } else {
    photosInput.style.borderColor = "";
  }

  if (!regionSelect.value) {
    isValid = false;
    errorMessage += "Por favor, selecciona una región.\n";
    regionSelect.style.borderColor = "red";
  } else {
    regionSelect.style.borderColor = "";
  }

  if (!comunaSelect.value) {
    isValid = false;
    errorMessage += "Por favor, selecciona una comuna.\n";
    comunaSelect.style.borderColor = "red";
  } else {
    comunaSelect.style.borderColor = "";
  }

  if (!validateUserName(userNameInput.value)) {
    isValid = false;
    errorMessage += "Por favor, ingresa un nombre válido (3 caracteres mínimo).\n";
    userNameInput.style.borderColor = "red";
  } else {
    userNameInput.style.borderColor = "";
  }

  if (!validateEmail(emailInput.value)) {
    isValid = false;
    errorMessage += "Por favor, ingresa un correo electrónico válido.\n";
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "";
  }

  const phoneValue = phoneInput.value.trim();
  if (phoneValue !== "") {
      if (!validatePhone(phoneValue)) {
          isValid = false;
          errorMessage += "Por favor, ingresa un numero válido. Comenzando con +56 seguido de otros 9 dígitos.\n";
          phoneInput.style.borderColor = "red";
      } else {
        phoneInput.style.borderColor = "";
      }
  } else {
    phoneInput.style.borderColor = "";
  }

  // Handle errors or redirect to confessions page
  if (!isValid) {
    alert(errorMessage); // Replace with a user-friendly error display
  } else {
    //document.getElementById("exito").style.display = "none";
    document.getElementById("confirmacion").style.display = "block";
  }
};

const confirmarRegistro = () => {
  // const name = document.getElementById("name").value;
  // localStorage.setItem("name", name);
  document.getElementById("confirmacion").style.display = "none";
  //document.getElementById("exito").style.display = "block";
  productoForm = document.getElementById("producto-form")
  // productoForm.submit();
  // document.getElementById("producto-form").reset();
};

const volverFormulario = () => {
  document.getElementById("confirmacion").style.display = "none";
  //document.getElementById("exito").style.display = "none";
};

//const volverPortada = () => {
  //document.getElementById("producto-form").submit();
  // window.location.href = "/";
//};

cargarRegiones();

const selectTipoProducto = document.getElementById("tipo-producto");
selectTipoProducto.addEventListener("change", cargarProductos);

const selectRegion = document.getElementById("region");
selectRegion.addEventListener("change", cargarComunas);

const submitButton = document.getElementById("envio");
submitButton.addEventListener("click", handleFormSubmit);

const confirmButton = document.getElementById("confirmar");
confirmButton.addEventListener("click", confirmarRegistro);

const cancelButton = document.getElementById("cancelar");
cancelButton.addEventListener("click", volverFormulario);

//const backButton = document.getElementById("volver");
//backButton.addEventListener("click", volverPortada);