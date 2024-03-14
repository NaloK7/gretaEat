let alphabet = [];

for (let i = 0; i < 26; i++) {
  if (i != 0) {
    document.querySelector(".alphabet").innerHTML += "<div> / </div>";
  }
  let letter = String.fromCharCode(65 + i);
  document.querySelector(".alphabet").innerHTML += `<p class="hover-translate">${letter}</p>`;
}

async function mealByLetter(letter) {

  // reset display
  document.querySelector("#categorie").innerHTML = "";
  // get meal by letter
  let gmbl = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  gmbl = await gmbl.json();

  // if no meals found
  if (gmbl.meals == null) {
    // display "aucun résultat"
    document.querySelector("#categorie").innerHTML +=
    '<h1>Aucun résultat trouvé</h1><div class="categorie-container"></div>';
    
  } else {
    document.querySelector("#categorie").innerHTML +=
    '<h1>Toutes les plats</h1><div class="categorie-container"></div>';
    // parse all meal to display them in an article
    for (let i = 0; i < gmbl.meals.length; i++) {
      const element = gmbl.meals[i];
      // get thumbnail
      let src = element.strMealThumb;
      // get name
      let name = element.strMeal;
      // get id
      let id = element.idMeal;
      // display
      document.querySelector(
        ".categorie-container"
        ).innerHTML += `<article class="categories-article hover-translate">
        <a href="meal.html?id=${id}">
        <img src="${src}" alt="${name}">
        </a>
        <h2>${name}</h2>
        </article>`;
      }
    }
}

// select all letter in <p>
let aLink = document.querySelectorAll(".alphabet p");
// for each add click event to execute a fetch with the proper letter
aLink.forEach((element) => {
  let letter = element.innerText.toLowerCase();
  element.addEventListener("click", function () {
    mealByLetter(letter);
  });
});
