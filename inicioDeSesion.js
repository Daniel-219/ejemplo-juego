// Recuperar el usuario nuevo del almacenamiento local

// Definición de los textos para el idioma español
const es_language = {
    h1: "Formulario de Registro de Usuario",
    labelNombres: "Nombres",
    labelApellidos: "Apellidos",
    radioSexo: [
        { labelM: "Masculino" },
        { labelF: "Femenino" }
    ],
    botones: [
        { btnCrear: ["Crear", "New"] },
        { btnSalir: ["Salir", "Quit"] }
    ]
};

// Evento de click para la opción 1
let chkOpcion1 = document.getElementById("opcion1");
chkOpcion1.addEventListener("click", function (e) {
    console.log(chkOpcion1.checked);
});

// Evento de envío para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Validación de campos
    if (!username || !password) {
        alert("Por favor, introduce tu nombre de usuario y contraseña.");
        return;
    }

    // Recuperar el usuario nuevo del almacenamiento local
    let usuarioNuevo = JSON.parse(localStorage.getItem("usuario_nuevo"));

    // Verificar si el usuarioNuevo existe y si los datos coinciden
    if (usuarioNuevo && usuarioNuevo.username === username) {
        try {
            let result = await bcrypt.compare(password, usuarioNuevo.password);
            if (result) {
                window.location.href = "inicio_juego.html";
            } else {
                alert("Los datos ingresados no son correctos");
            }
        } catch (err) {
            console.error(err);
            alert("Ocurrió un error al verificar la contraseña. Por favor, inténtalo de nuevo.");
        }
    } else {
        alert("El nombre de usuario ingresado no existe.");
    }
});
