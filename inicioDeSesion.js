// Función auxiliar para cambiar el texto de un elemento
function setText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

function changeLanguage(langCode) {
    const lang = languages[langCode];
    if (!lang) {
        console.error(`Unsupported language code: ${langCode}`);
        return;
    }

    setText('h1', lang.h1);
    setText('#labelNombres', lang.labelNombres);
    setText('#labelApellidos', lang.labelApellidos);
    setText('#labelSexoM', lang.radioSexo.labelM);
    setText('#labelSexoF', lang.radioSexo.labelF);
    setText('#btnCrear', lang.botones.btnCrear);
    setText('#btnSalir', lang.botones.btnSalir);
}

// ...

async function authenticateUser(username, password) {
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
}

// ...

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMessage = validateForm(username, password);
    if (errorMessage) {
        // Mostrar el mensaje de error en la página
        return;
    }

    try {
        await authenticateUser(username, password);
        window.location.href = "inicio_juego.html";
    } catch (error) {
        // Mostrar el mensaje de error en la página
    }
});
