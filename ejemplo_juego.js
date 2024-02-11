
/*funcion para cambio de idioma */
const es_language = {
  h1: "Formulario de Registro de Usuario"
  , labelNombres: "Nombres"
  , labelApellidos: "Apellidos"
  , radioSexo: [
      {
          labelM: "Masculino"
      }, {
          labelF: "Femenino"
      }
  ]
  , botones: [
      { btnCrear: ["Crear", "New"] }
      , { btnSalir: ["Salir", "Quit"] }
  ]
}


let chkOpcion1 = document.getElementById("opcion1");
chkOpcion1.addEventListener("click", function (e) {
  //alert("hiciste click");
  console.log(chkOpcion1.checked);
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  console.log('Nombre de usuario: ' + username);
  console.log('Contraseña: ' + password);

  if (username == "cerebrus" && password == "killer") {
    window.location.href = "https://images.app.goo.gl/iFDyfcxeFLvQResGA";
  } else {
    alert("Los datos ingresados no son correctos");
  }
});

// reutilizar contraseña

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
  if(result) {
      // Si la contraseña coincide, permite al usuario iniciar sesión.
  } else {
      // Si la contraseña no coincide, muestra un mensaje de error.
  }
});