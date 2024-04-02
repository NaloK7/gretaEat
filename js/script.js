
// HEADER
document.querySelector(
  "header"
).innerHTML = `
<a id="logo" href="index.html" class="flex_row"><img id="logoimg" src="img/logo2.png" alt="logo greta eat">
<h1 id="logotxt">GretaEat</h1>
</a>
<nav class="flex_row">
<a id="all-cat-btn" href="categories.html">Categories</a>
<a href="first-letter.html">A - Z</a>
<a href="random.html"><i class="fas fa-random"></i></a>
<a href="search.html"><i class="fas fa-search"></i> Rechercher</a>
</nav>`;


// logo animation
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
  let logo = document.querySelector("#logoimg");
  logo.src = `img/logo${(counter % (logoPaths.length - 1)) + 1}.png`;
  return counter;
}

incrementCounter();

// FOOTER
let footer = document.querySelector('footer')
footer.classList += "flex_row"
footer.innerHTML = `<p>2024 GretaEat</p><p>Jolan FICHET</p>`