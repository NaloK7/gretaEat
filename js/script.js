document.querySelector(
  "header"
).innerHTML = `
<a id="logo" href="index.html"><img id="logoimg" src="img/logo2.png" alt="logo greta eat">
<h1 id="logotxt">GretaEat</h1>
</a>
<nav>
<a href="random.html"><i class="fas fa-random"></i></a>
<a id="all-cat-btn" href="categories.html">Categories</a>
<a href="first-letter.html">A - Z</a>
<a href="search.html"><i class="fas fa-search"></i> Rechercher</a>
</nav>`;

let logoPaths = [
  "img/logo1.png",
  "img/logo2.png",
  "img/logo3.png",
  "img/logo4.png",
  "img/logo5.png",
  "img/logo6.png",
];

function incrementCounter() {
  let counter = localStorage.getItem("counter");
  counter = counter ? parseInt(counter) + 1 : 1;
  localStorage.setItem("counter", counter);
  let logo = document.querySelector("#logo");
  logo.innerHTML = `<img id="logoimg" src="img/logo${
    (counter % (logoPaths.length - 1)) + 1
  }.png" alt="logo greta eat">
    <h1 id="logotxt">GretaEat</h1>`;
  return counter;
}

incrementCounter();

