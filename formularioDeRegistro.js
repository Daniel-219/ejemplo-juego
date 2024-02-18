// Definición de los textos para los idiomas
const languageTexts = {
  textoAnimado: ["Formulario de Registro", "Registration Form"],
  username: ["Nombre del usuario", "Username"],
  lastname: ["Apellido del usuario", "Last name"],
  email: ["Email", "Email"],
  radSexM: ["M", "M"],
  radSexF: ["F", "F"],
  radSexI: ["I", "I"],
  password: ["Contraseña", "Password"],
  password2: ["Repetir Contraseña", "Repeat Password"],
  opcion1: ["Acepto las bases y condiciones", "I accept the terms and conditions"],
  opcion2: ["No soy un robot", "I'm not a robot"],
  btnregistrarse: ["Registrarse", "Register"]
};

let currentLanguage = 0; // 0 para español, 1 para inglés

function changeLanguage() {
  // Cambia el idioma
  currentLanguage = 1 - currentLanguage;

  // Actualiza el texto de los elementos
  for (const id in languageTexts) {
    const element = document.getElementById(id);
    if (element) {
      if (element.tagName === 'INPUT' && element.type === 'text') {
        element.placeholder = languageTexts[id][currentLanguage];
      } else {
        element.textContent = languageTexts[id][currentLanguage];
      }
    }
  }
}

function validarCampo(campo) {
  return campo.value.trim() !== '';
}

function agregarEventos() {
  const btnRegistrarse = document.getElementById('btnregistrarse');
  const usernameElem = document.getElementById('username');
  const lastnameElem = document.getElementById('lastname');
  const emailElem = document.getElementById('email');
  const passwordElem = document.getElementById('password');
  const password2Elem = document.getElementById('password2');
  const chkOpcion1 = document.getElementById("opcion1");
  const chkOpcion2 = document.getElementById("opcion2");
  const arrayRadioSexo = document.getElementsByName("sexo");

  btnRegistrarse.addEventListener('click', function () {
    const campos = [usernameElem, lastnameElem, emailElem, passwordElem, password2Elem];
    const todosLosCamposLlenos = campos.every(validarCampo);

    if (!todosLosCamposLlenos || !chkOpcion1.checked || !chkOpcion2.checked || !arrayRadioSexo.some(radio => radio.checked)) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    if (passwordElem.value !== password2Elem.value) {
      alert("Las contraseñas no coinciden!!");
      return;
    }

    const usuario = {
      nombres: usernameElem.value,
      apellidos: lastnameElem.value,
      email: emailElem.value,
      contraseña: passwordElem.value
    }

    localStorage.setItem("usuario_nuevo", JSON.stringify(usuario));
    location.href = 'inicio_juego.html';
  });
}

let i = 0;
let speed = 200;

function typeWriter(elementId) {
  const element = document.getElementById(elementId);
  const fullText = languageTexts[elementId][currentLanguage];

  // Crea el elemento "placeholder" si aún no existe
  let placeholder = document.getElementById(elementId + 'Placeholder');
  if (!placeholder) {
    placeholder = document.createElement('div');
    placeholder.id = elementId + 'Placeholder';
    placeholder.style.visibility = 'hidden'; // Hace que el "placeholder" sea invisible
    placeholder.textContent = fullText;
    element.parentNode.insertBefore(placeholder, element);
  }

  // Escribe el texto letra por letra
  if (i < fullText.length) {
    element.textContent += fullText.charAt(i);
    i++;
    setTimeout(() => typeWriter(elementId), speed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  agregarEventos();
  typeWriter("textoAnimado");
});
