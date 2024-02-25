// inicioDeSesion.js

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
  yaCuenta: ["¿Ya tienes una cuenta?", "Do you already have an account?"]
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

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const btn = document.getElementById('btnregistrarse');

  btn.addEventListener('click', function (event) {
    event.preventDefault();

    let isValid = true;
    const inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checkValidity()) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      const data = {
        username: document.getElementById('username').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        sexo: form.sexo.value,
        password: document.getElementById('password').value,
        opcion1: document.getElementById('opcion1').checked,
        opcion2: document.getElementById('opcion2').checked,
      };

      localStorage.setItem('formData', JSON.stringify(data));
      window.location.href = 'vistaJuedos.html';
    } else {
      alert('Por favor, rellena todos los campos correctamente.');
    }
  });
});
