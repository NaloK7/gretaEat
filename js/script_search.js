
// search button
let btnSearch = document.querySelector("#btnSearch");
// search bar
let searchInput = document.querySelector("#search-meal-input");
// click on button
btnSearch.addEventListener("click", getMealsBySearch);
// press enter on bar
searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      getMealsBySearch();
    }
  });

// fetch url + txt
async function getMealsBySearch() {
  // reset display
  document.querySelector("#categorie").innerHTML = "";
  // get input txt
  let inputTxt = document.querySelector("#search-meal-input").value;
  // get meals by search
  let gmbs = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputTxt}`
  );
  gmbs = await gmbs.json();
  // parse object
    let section = document.querySelector("#categorie");
    // if no meals found
  if (gmbs.meals == null) {
    section.innerHTML += `<h1>Aucun résultat: "${inputTxt.toUpperCase()}"</h1>`;
  } else {
    // exception → display exemples
    if (inputTxt == "") {
      section.innerHTML += `<h1>Quelque exemples:</h1><div class="categorie-container  flex_row"></div>`;
    } else {
        // normal case → display meals found
      section.innerHTML += `<h1>${gmbs.meals.length} résultat(s) pour: "${inputTxt}"</h1><div class="categorie-container flex_row"></div>`;
    }
    // parse all meal to display them in an article
    for (let i = 0; i < gmbs.meals.length; i++) {
      const element = gmbs.meals[i];
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


