document.querySelectorAll('.menu button').forEach(button => {
    button.addEventListener('click', () => {
        try {
            // Aquí puedes reemplazar esta línea con tu propia lógica para mostrar el mensaje en la página
            console.log(`Has hecho clic en el botón ${button.textContent}`);
        } catch (error) {
            console.error('Ocurrió un error al hacer clic en el botón:', error);
        }
    });
});
