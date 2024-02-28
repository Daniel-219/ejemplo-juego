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

// Asignamos las funciones a los botones
botones.forEach((boton, index) => {
    switch (index) {
        case 0:
            // Primer botón: recorre toda la página con un círculo y vuelve al lugar de inicio
            boton.addEventListener('click', () => addAnimation(boton, 'circular'));
            break;
        case 1:
            // Segundo botón: va de arriba a abajo dos veces hasta volver al punto de partida
            boton.addEventListener('click', () => addAnimation(boton, 'upDown'));
            break;
        case 2:
            // Tercer botón: cambia en varios colores y muestra un mensaje
            boton.addEventListener('click', () => {
                addAnimation(boton, 'colorChange');
                alert('Aquí se muestra cómo jugar');
            });
            break;
        case 3:
            // Cuarto botón: hace movimientos al azar por la pantalla cada vez que se le da click
            boton.addEventListener('click', () => moveButtonRandomly(boton));
            break;
    }
});

// JavaScript para reproducir el audio automáticamente
document.getElementById('myAudio').play();
