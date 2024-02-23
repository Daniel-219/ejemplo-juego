// Recuperar el usuario nuevo del almacenamiento local
let usuarioNuevo = JSON.parse(localStorage.getItem("usuario_nuevo"));

// Definición de los textos para el idioma español
const es_language = {
  h1: "Formulario de Registro de Usuario",
  labelNombres: "Nombres",
  labelApellidos: "Apellidos",
  radioSexo: [
    { labelM: "Masculino" },
    { labelF: "Femenino" }
  ],
  botones: [
    { btnCrear: ["Crear", "New"] },
    { btnSalir: ["Salir", "Quit"] }
  ]
};

// Evento de click para la opción 1
let chkOpcion1 = document.getElementById("opcion1");
chkOpcion1.addEventListener("click", function (e) {
  console.log(chkOpcion1.checked);
});

// Evento de envío para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username === "cerebrus" && password === "killer") {
    window.location.href = "inicio_juego.html";
  } else {
    alert("Los datos ingresados no son correctos");
  }
});

// Comparación de contraseñas
bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
  if (result) {
    // Si la contraseña coincide, permite al usuario iniciar sesión.
  } else {
    // Si la contraseña no coincide, muestra un mensaje de error.
  }
});


