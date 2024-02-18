const links = {
    'minecraft': 'file:///C:/Users/priet/Desktop/Trabajo_de_investigacion/interfaz.html',
    'bing': 'https://www.bing.com',
    'amongus': 'https://www.duckduckgo.com'
};

for (let id in links) {
    let element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function () {
            window.location.href = links[id];
        });
    } else {
        console.warn(`Element with id "${id}" does not exist.`);
    }
}
