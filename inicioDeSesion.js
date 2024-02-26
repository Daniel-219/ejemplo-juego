// Definición de los textos para los idiomas
const languageTexts = {
    textoAnimado: ["Iniciar sesión", "Log in"],
    username: ["Nombre de usuario", "Username"],
    password: ["Contraseña", "Password"],
    acepto: ["Acepto las bases y condiciones", "I accept the terms and conditions"],
    btnregistrarse: ["Iniciar sesión", "Log in"],
    registrate: ["Registrate aqui", "Sign up here"]
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
            } if (element) {
                element.placeholder = languageTexts[id][currentLanguage];

            }
        }
    }
}

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const acepto = document.getElementById('opcion1').checked;

    // Validar que los campos no estén vacíos
    if (username === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validar que el usuario haya aceptado las bases y condiciones
    if (!acepto) {
        alert('Por favor, acepte las bases y condiciones.');
        return false;
    }

    // Recuperar los datos de formData de localStorage y convertirlos a un objeto JavaScript
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Validar que los datos de inicio de sesión coincidan con los almacenados en formData
    if (username !== formData.username || password !== formData.password) {
        alert('Nombre de usuario o contraseña incorrectos.');
        return false;
    }

    // Si todo está bien, redirigir a vistaJuegos.html
    window.location.href = 'vistaJuegos.html';
    return false;  // Para prevenir el comportamiento por defecto del formulario
}
