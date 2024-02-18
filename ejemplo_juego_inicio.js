

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
        labelI: ["Indistino", "indistinct"]
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

function agregarEventos() {
  document.getElementById('btnregistrarse').addEventListener('click', function () {
    //event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const arrayRadioSexo = document.getElementsByName("sexo");
    const password = document.getElementById('password').value.trim();
    const password2 = document.getElementById('password2').value.trim();
    const chkOpcion1 = document.getElementById("opcion1");
    const chkOpcion2 = document.getElementById("opcion2");
    //const todosLosCamposLlenos = document.getElementById["username", "lastname", "email", "sexo", "password", "password2", "opcion1", "opcion2"];
    const listaCampos = ["username", "lastname", "email", "password", "password2"];

    let todosLosCamposLlenos = true;
    let campos = document.querySelectorAll('input'); // Asume que todos los campos son inputs

    debugger;
    for (let input of listaCampos) {
      const elemento = document.getElementById(input);
      if (!elemento.value.trim()) {
        todosLosCamposLlenos = false;
        break;
      }
    }

    if (todosLosCamposLlenos) {
      location.href = 'inicio_juego.html'; // Redirige a la página web
    } else {
      alert('Por favor, llena todos los campos.'); // Muestra un mensaje si no todos los campos están llenos
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

    if (!estaMarcadoElSexo) {
      alert("Debe seleccionar el sexo!!");
      return;
    }
    //Si no se marcó ningun radiobutton se avisa al usuario


    if (!username) {
      alert("Complete su nombre!!");
      return;
    }
    if (!lastname) {
      alert("Complete su apellido!!");
      return;
    }
    if (!email) {
      alert("Complete su email!!");
      return;
    }
    if (password !== password2) {
      alert("Las contraseñas no coinciden!!");
      return;
    }

    if (!chkOpcion1.checked) {
      alert("¿Debe aceptar las bases!");
      return;
    }

    if (!chkOpcion2.checked) {
      alert("Seleccione que no eres un robot!");
      return;
    }

    console.log('Nombre de usuario: ' + username);
    console.log('Apellido del usuario: ' + lastname);
    console.log('Email: ' + email);
    console.log('Contraseña: ' + password);
    //si llegamos hasta aqui significa que todo esta validado
    const usuario = {
      nombres: username
      , apellidos: lastname
      , email: email
      , contraseña: password
    }
    //guardar informacion 
    const crearUsuario = JSON.stringify(usuario);
    localStorage.setItem("usuario_nuevo", crearUsuario);
  });
  document.getElementById("opcion1").addEventListener('click', function () {
    alert('presionaste');
  });
  document.getElementById("opcion2").addEventListener('click', function () {
    alert('presionaste');
  });
}

//funcion principal
document.addEventListener("DOMContentLoaded", function () {
  agregarEventos();

  let i = 0;
  let txt = '¡Formulario de Registro!';
  let speed = 200;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("textoAnimado").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});