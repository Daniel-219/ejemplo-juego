// Definición de los textos para los idiomas
const languageTexts = {
    textoAnimado: ["Iniciar sesión", "Log in"],
    username: ["Nombre de usuario", "Username"],
    password: ["Contraseña", "Password"],
    acepto: ["Acepto las bases y condiciones", "I accept the terms and conditions"],
    btnregistrarse: ["Iniciar sesión", "Log in"],
    registrate:["Registrate aqui","Sign up here"]
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
            }if (element) {
                element.placeholder = languageTexts[id][currentLanguage];
          
              }
        }
    }
}

/*async function authenticateUser(username, password) {
    const usuarioNuevo = JSON.parse(localStorage.getItem("usuario_nuevo"));
    if (!usuarioNuevo || usuarioNuevo.username !== username) {
        throw new Error("El nombre de usuario ingresado no existe.");
    }

    try {
        const result = await bcrypt.compare(password, usuarioNuevo.password);
        if (!result) {
            throw new Error("Los datos ingresados no son correctos");
        }
    } catch (err) {
        console.error(err);
        throw new Error("Ocurrió un error al verificar la contraseña. Por favor, inténtalo de nuevo.");
    }
}*/

document.getElementById('loginForm').addEventListener('submit', /*async*/ function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMessage = validateForm(username, password);
    if (errorMessage) {
        // Mostrar el mensaje de error en la página
        return;
    }
});
    /*try {
        await authenticateUser(username, password);
        window.location.href = "inicio_juego.html";
    } catch (error) {
        // Mostrar el mensaje de error en la página
    }
});*/
