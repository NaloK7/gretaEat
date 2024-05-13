
/**
 * in a div made a paragraph by letters in the alphabet 
 */
function displayAlphabet() {
  for (let i = 0; i < 26; i++) {
    if (i != 0) {
      document.querySelector(".alphabet").innerHTML += "<div> / </div>";
    }
    let letter = String.fromCharCode(65 + i);
    document.querySelector(".alphabet").innerHTML += `<p class="hover-translate">${letter}</p>`;
  }
}

/**
 * display all meals starting with letter passed in parameter, using TheMealDB API
 * @param {character} letter first letter of a meal name
 */
async function mealByLetter(letter) {
  document.querySelector("#categorie").innerHTML = "";
  let gmbl = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  gmbl = await gmbl.json();
  if (gmbl.meals == null) {
    document.querySelector("#categorie").innerHTML +=
    '<h1>Aucun résultat trouvé</h1><div class="categorie-container flex_row"></div>';
    
  } else {
    document.querySelector("#categorie").innerHTML +=
    '<h1>Toutes les plats</h1><div class="categorie-container flex_row"></div>';
    for (let i = 0; i < gmbl.meals.length; i++) {
      const element = gmbl.meals[i];
      let src = element.strMealThumb;
      let name = element.strMeal;
      let id = element.idMeal;
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


displayAlphabet()

let aLink = document.querySelectorAll(".alphabet p");
aLink.forEach((element) => {
  let letter = element.innerText.toLowerCase();
  element.addEventListener("click", function () {
    mealByLetter(letter);
  });
});
