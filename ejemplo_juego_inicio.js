
function changeLanguage() {
  h1: ["Formulario de Registro de Usuario", "User Registration Form"]
  , labelNombres= ["Nombres", "Name"]
  , labelApellidos= ["Apellidos", "Last Name"]
  , radioSexo= [
      {
          labelM: ["Masculino", "Male"]
      }, {
          labelF: ["Femenino", "Female"]
      },{}
  ]
  , botones= [
      { btnCrear: ["Crear", "New"] }
      , { btnSalir: ["Salir", "Quit"]}
    ]
, password=[
  {

  }
]

  alert('Cambiando el idioma...');
}

//creando nodos de mi pagina
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");


/*btnCrear.addEventListener("click", function(){
    // esto recupera el valor de nombre
    const nombres = txtnombres.value.trim();
    //valido el nombre
    if(!nombres) {
        alert("Capelus, te falta el nombre");
    }

    // recorrer el array de sexo
    for(let item of Rsexo) {
        console.log(item.checked);
    }

});*/
let chkOpcion1 = document.getElementById("opcion1");
chkOpcion1.addEventListener("click", function (e) {
  //alert("hiciste click");
  console.log(chkOpcion1.checked);
});

let chkOpcion2 = document.getElementById("opcion2");
chkOpcion1.addEventListener("click", function (e) {
  //alert("hiciste click");
  console.log(chkOpcion2.checked);
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let username = document.getElementById('username').value;

  let lastname = document.getElementById('lastname').value;

  let email = document.getElementById('email').value;

  let password = document.getElementById('password').value;


  // recorrer el array de sexo
  let estaMarcadoElSexo = false;
  for(let item of arrayRadioSexo) {
      //Revisar si la propiedad checked es true
      //Revisar si el value del item para saber si es M o F o I
      if(item.checked && item.value === "M") {
          estaMarcadoElSexo = true;
          console.log(item.checked);
      }
      if(item.checked && item.value === "F") {
          estaMarcadoElSexo = true;
          console.log(item.checked);
      } 
      if(item.checked && item.value === "I") {
        estaMarcadoElSexo = true;
        console.log(item.checked);
      }
  }
  //Si no se marcó ningun radiobutton se avisa al usuario
  if(!estaMarcadoElSexo) {
      alert("¿Debe seleccionar el sexo!");
      return;
  }
 // guardar contraseña
  const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Guarda el hash de la contraseña en tu base de datos.
});

//reutilizar contraseña

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
  if(result) {
      // Si la contraseña coincide, permite al usuario iniciar sesión.
  } else {
      // Si la contraseña no coincide, muestra un mensaje de error.
  }
});




  console.log('Nombre de usuario: ' + username);
  console.log('Apellido del usuario: ' + lastname);
  console.log('Email: ' + email);
  console.log('Contraseña: ' + password);
});