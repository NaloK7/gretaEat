
let logoPaths = [
    "img/logo1.png",
    "img/logo2.png",
    "img/logo3.png",
    "img/logo4.png",
    "img/logo5.png",
    "img/logo6.png"
]

function incrementCounter() {
    let counter = localStorage.getItem('counter');
    counter = counter ? parseInt(counter) + 1 : 1;
    localStorage.setItem('counter', counter);
    let logo = document.querySelector('#logo')
    logo.innerHTML = `<img id="logoimg" src="img/logo${(counter%(logoPaths.length-1))+1}.png" alt="logo greta eat">
    <h1 id="logotxt">GretaEat</h1>`
    return counter;
}

incrementCounter();
