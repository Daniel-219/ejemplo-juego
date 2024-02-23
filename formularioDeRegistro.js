// Definición de los textos para los idiomas
const languageTexts = {
  textoAnimado: ["Formulario de Registro", "Registration Form"],
  username: ["Nombre del usuario", "Username"],
  lastname: ["Apellido del usuario", "Last name"],
  email: ["Email", "Email"],
  sex: ["sexo", "sex"],
  password: ["Contraseña", "Password"],
  password2: ["Repetir Contraseña", "Repeat Password"],
  acepBas: ["Acepto las bases y condiciones", "I accept the terms and conditions"],
  noRobot: ["No soy un robot", "I'm not a robot"],
  btnregistrarse: ["Registrarse", "Register"],
  yaCuenta: ["¿Ya tienes una cuenta?","Do you already have an account?"]
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
    if (element) {
      element.placeholder = languageTexts[id][currentLanguage];

    }
  }
}

function validarCampo(campo) {
  return campo.value.trim() !== '';
}

const formElements = {
  usernameElem: document.getElementById('username'),
  lastnameElem: document.getElementById('lastname'),
  emailElem: document.getElementById('email'),
  passwordElem: document.getElementById('password'),
  password2Elem: document.getElementById('password2'),
  chkOpcion1: document.getElementById("opcion1"),
  chkOpcion2: document.getElementById("opcion2"),
  arrayRadioSexo: document.getElementsByName("sexo")
};

function agregarEventos() {
  const btnRegistrarse = document.getElementById('btnregistrarse');

  btnRegistrarse.addEventListener('click', function () {
    const campos = [formElements.usernameElem, formElements.lastnameElem, formElements.emailElem, formElements.passwordElem, formElements.password2Elem];
    const todosLosCamposLlenos = campos.every(validarCampo);

    if (!todosLosCamposLlenos || !formElements.chkOpcion1.checked || !formElements.chkOpcion2.checked || !formElements.arrayRadioSexo.some(radio => radio.checked)) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    if (formElements.passwordElem.value !== formElements.password2Elem.value) {
      alert("Las contraseñas no coinciden!!");
      return;
    }

    const usuario = {
      nombres: formElements.usernameElem.value,
      apellidos: formElements.lastnameElem.value,
      email: formElements.emailElem.value,
      contraseña: formElements.passwordElem.value
    }

    localStorage.setItem("usuario_nuevo", JSON.stringify(usuario));
    location.href = 'inicio_juego.html';
  });
}

function typeWriter(elementId, i = 0, speed = 200) {
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
    setTimeout(() => typeWriter(elementId, i + 1, speed), speed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  agregarEventos();
  typeWriter("textoAnimado");
});
