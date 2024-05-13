

let btnSearch = document.querySelector("#btnSearch");
let searchInput = document.querySelector("#search-meal-input");
btnSearch.addEventListener("click", getMealsBySearch);
searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      getMealsBySearch();
    }
  });

  
async function getMealsBySearch() {
  document.querySelector("#categorie").innerHTML = "";
  let inputTxt = document.querySelector("#search-meal-input").value;
  let gmbs = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputTxt}`
  );
  gmbs = await gmbs.json();
    let section = document.querySelector("#categorie");
  if (gmbs.meals == null) {
    section.innerHTML += `<h1>Aucun résultat: "${inputTxt.toUpperCase()}"</h1>`;
  } else {
    if (inputTxt == "") {
      section.innerHTML += `<h1>Quelque exemples:</h1><div class="categorie-container  flex_row"></div>`;
    } else {
      section.innerHTML += `<h1>${gmbs.meals.length} résultat(s) pour: "${inputTxt}"</h1><div class="categorie-container flex_row"></div>`;
    }
    for (let i = 0; i < gmbs.meals.length; i++) {
      const element = gmbs.meals[i];
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


