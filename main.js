let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Natali Meza Barranco')
    .deleteChars(20)
    .typeString('Ciencia de datos')
    .pauseFor(300)
    .deleteChars(20)
    .start();
