
/**
 * get the name of an ingredient in url
 * @returns {string} name of ingredient
 */
function getIngredient() {
  let url = document.location;
  let search = url.search;
  let param = new URLSearchParams(search);
  let i = param.get("i");
  return i
}


/**
 * display all meals using the ingredient passed in parameter, using TheMealDB API
 * @param {string} i name of an ingredient
 */
async function getMealsByIngredient(i) {
  document.querySelector("#categorie").innerHTML = "";
  let gmbs = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}`
  );
  gmbs = await gmbs.json();
  let section = document.querySelector("#categorie");
  section.innerHTML = `
  <h1>Toutes les plats</h1>
  <div class="categorie-container flex_row"></div>`;

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

getMealsByIngredient(getIngredient());
