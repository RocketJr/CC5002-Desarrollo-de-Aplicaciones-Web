// import { datosProductos, regionesYcomunas } from '../js/data.js';

let datosProductos = {
  Frutas: ["Arándano", "Frambuesa", "Frutilla", "Grosella", "Mora", "Limón", "Mandarina", "Naranja", "Pomelo", "Melón", "Sandía", "Palta", "Chirimoya", "Coco", "Dátil", "Kiwi", "Mango", "Papaya", "Piña", "Plátano", "Damasco", "Cereza", "Ciruela", "Higo", "Kaki", "Manzana", "Durazno", "Nectarin", "Níspero", "Pera", "Uva", "Almendra", "Avellana", "Maní", "Castaña", "Nuez", "Pistacho"],
  Verduras: ["Brócoli", "Repollo", "Coliflor", "Rábano", "Alcachofa", "Lechuga", "Zapallo", "Pepino", "Haba", "Maíz", "Champiñón", "Acelga", "Apio", "Espinaca", "Perejil", "Ajo", "Cebolla", "Espárrago", "Puerro", "Acelga", "Espinaca", "Remolacha", "Berenjena", "Papa", "Pimiento", "Tomate", "Zanahoria"]
};

let regionesYcomunas = {
  "Región de Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Región de Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Región de Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Región de Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "Región de Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  "Región de Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
  "Región del Libertador Gral. Bernardo O’Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  "Región del Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  "Región de Ñuble": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
  "Región del Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
  "Región de la Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
  "Región de Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  "Región de Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
  "Región Aisén del Gral. Carlos Ibáñez del Campo": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
  "Región de Magallanes y de la Antártica Chilena": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
  "Región Metropolitana de Santiago": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
};

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

// --- Form Handling ---

const handleFormSubmit = () => {
  console.log("Validating form...");

  const emailInput = document.getElementById("email");
  const userNameInput = document.getElementById("name");
  const phoneInput = document.getElementById("celular");
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
    document.getElementById("exito").style.display = "none";
    document.getElementById("confirmacion").style.display = "block";
  }
};

const confirmarRegistro = () => {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  document.getElementById("confirmacion").style.display = "none";
  document.getElementById("exito").style.display = "block";
  document.getElementById("producto-form").reset();
};

const volverFormulario = () => {
  document.getElementById("confirmacion").style.display = "none";
  document.getElementById("exito").style.display = "none";
};

const volverPortada = () => {
  window.location.href = "../html/index.html";
};

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

const backButton = document.getElementById("volver");
backButton.addEventListener("click", volverPortada);