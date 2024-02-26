/*document.querySelectorAll('.menu button').forEach(button => {
    button.addEventListener('click', () => {
        try {
            console.log(`Has hecho clic en el botón ${button.textContent}`);
        } catch (error) {
            console.error('Ocurrió un error al hacer clic en el botón:', error);
        }
    });
});*/

// Seleccionamos los botones
const botones = document.querySelectorAll('button');

// Función para generar un número aleatorio
const randomPosition = (max) => Math.floor(Math.random() * max);

// Función para mover el botón a una posición aleatoria
const moveButtonRandomly = (button) => {
    const x = randomPosition(window.innerWidth);
    const y = randomPosition(window.innerHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
};

// Función para agregar una animación al botón
const addAnimation = (button, animationName) => {
    button.classList.add(animationName);
};

// Primer botón: recorre toda la página con un círculo y vuelve al lugar de inicio
botones[0].addEventListener('click', () => addAnimation(botones[0], 'circular'));

// Segundo botón: va de arriba a abajo dos veces hasta volver al punto de partida
botones[1].addEventListener('click', () => addAnimation(botones[1], 'upDown'));

// Tercer botón: cambia en varios colores y muestra un mensaje
botones[2].addEventListener('click', () => {
    addAnimation(botones[2], 'colorChange');
    alert('Aquí se muestra cómo jugar');
});

// Cuarto botón: hace movimientos al azar por la pantalla cada vez que se le da click
botones[3].addEventListener('click', () => moveButtonRandomly(botones[3]));
