
const languages = {
    es: {
        h1: "Formulario de Registro de Usuario",
        labelNombres: "Nombres",
        labelApellidos: "Apellidos",
        radioSexo: [
            { labelM: "Masculino" },
            { labelF: "Femenino" }
        ],
        botones: [
            { btnCrear: "Crear" },
            { btnSalir: "Salir" }
        ]
    },
    en: {
        h1: "User Registration Form",
        labelNombres: "First Name",
        labelApellidos: "Last Name",
        radioSexo: [
            { labelM: "Male" },
            { labelF: "Female" }
        ],
        botones: [
            { btnCrear: "Create" },
            { btnSalir: "Quit" }
        ]
    }
};

function changeLanguage(langCode) {
    const lang = languages[langCode];
    if (!lang) {
        console.error(`Unsupported language code: ${langCode}`);
        return;
    }

    document.querySelector('h1').textContent = lang.h1;
    document.querySelector('#labelNombres').textContent = lang.labelNombres;
    document.querySelector('#labelApellidos').textContent = lang.labelApellidos;
    document.querySelector('#labelSexoM').textContent = lang.radioSexo[0].labelM;
    document.querySelector('#labelSexoF').textContent = lang.radioSexo[1].labelF;
    document.querySelector('#btnCrear').textContent = lang.botones.btnCrear;
    document.querySelector('#btnSalir').textContent = lang.botones.btnSalir;
}

changeLanguage('en');

// Evento de click para la opción 1
const chkOpcion1 = document.getElementById("opcion1");
chkOpcion1.addEventListener("click", function (e) {
    console.log(chkOpcion1.checked);
});

// Función para validar los campos del formulario
function validateForm(username, password) {
    if (!username || !password) {
        return "Por favor, introduce tu nombre de usuario y contraseña.";
    }
    return null;
}

// Función para autenticar al usuario
async function authenticateUser(username, password) {
    let usuarioNuevo = localStorage.getItem("usuario_nuevo");
    if (!usuarioNuevo) {
        return "El nombre de usuario ingresado no existe.";
    }

    usuarioNuevo = JSON.parse(usuarioNuevo);
    if (usuarioNuevo.username !== username) {
        return "El nombre de usuario ingresado no existe.";
    }

    try {
        let result = await bcrypt.compare(password, usuarioNuevo.password);
        if (!result) {
            return "Los datos ingresados no son correctos";
        }
    } catch (err) {
        console.error(err);
        return "Ocurrió un error al verificar la contraseña. Por favor, inténtalo de nuevo.";
    }

    return null;
}

// Evento de envío para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMessage = validateForm(username, password);
    if (errorMessage) {
        // Mostrar el mensaje de error en la página
        return;
    }

    const authError = await authenticateUser(username, password);
    if (authError) {
        // Mostrar el mensaje de error en la página
        return;
    }

    window.location.href = "inicio_juego.html";
});
