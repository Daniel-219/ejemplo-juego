

function changeLanguage() {
  h1: ["Formulario de Registro de Usuario", "User Registration Form"]
    , labelNombres = ["Nombres", "Name"]
    , labelApellidos = ["Apellidos", "Last Name"]
    , radioSexo = [
      {
        labelM: ["Masculino", "Male"]
      }, {
        labelF: ["Femenino", "Female"]
      }, {
        labelI: ["Indistino","indistinct"]
      }
    ]
    , botones = [
      { btnCrear: ["Crear", "New"] }
      , { btnSalir: ["Salir", "Quit"] }
    ]
    , password = ["Contraseña", "Password"]
    , button = ["Registrarse", "Check in"]

  alert('Cambiando el idioma...');
};
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    function capturarDatosDelFormulario() {
    const username = document.getElementById('username').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const arrayRadioSexo =document.getElementsByName("sexo").value.trim();
    const password = document.getElementById('password').value.trim();
    }

    let Masculino = null;
    let Femenino = null;

    // recorrer el array de sexo
    let estaMarcadoElSexo = false;
    for (let item of arrayRadioSexo) {
      //Revisar si la propiedad checked es true
      //Revisar si el value del item para saber si es M o F o I
      if (item.checked && item.value === "M") {
        estaMarcadoElSexo = true;
        console.log(item.checked);
      }
      if (item.checked && item.value === "F") {
        estaMarcadoElSexo = true;
        console.log(item.checked);
      }
      if (item.checked && item.value === "I") {
        estaMarcadoElSexo = true;
        console.log(item.checked);
      }
    }
    //Si no se marcó ningun radiobutton se avisa al usuario
    debugger;
    if (!estaMarcadoElSexo) {
      alert("¿Debe seleccionar el sexo!");
      return;
    }
    document.addEventListener("DOMContentLoaded", function () {
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
    });

    console.log('Nombre de usuario: ' + username);
    console.log('Apellido del usuario: ' + lastname);
    console.log('Email: ' + email);
    console.log('Contraseña: ' + password);
  });

//si llegamos hasta aqui significa que todo esta validado
const usuario = {


}
//guardar informacion 
const crearUsuario = JSON.stringify(loginForm);
localStorage.setItem("loginForm", crearUsuario);

