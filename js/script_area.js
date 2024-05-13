
/**
 * get country name in url parameter
 * @returns {string} a country name
 */
function getArea() {
  let url = document.location;
  let search = url.search;
  let param = new URLSearchParams(search);
  let a = param.get("a");
  return a;
}

/**
 * display all meal by country, using TheMealDB API
 * @param {string} a name of country
 */
async function mealsByArea(a) {
  let gamr = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`
  );
  gamr = await gamr.json();

  document.querySelector("#country-title").innerHTML += a;
  for (let i = 0; i < gamr.meals.length; i++) {
    const element = gamr.meals[i];
    let src = element.strMealThumb;
    let name = element.strMeal;
    let id = element.idMeal;
    document.querySelector(
      ".categorie-container"
    ).innerHTML += `<article class="categories-article hover-translate"><a href="meal.html?id=${id}"><img src="${src}" alt="${name}"></a><h2>${name}</h2></article>`;
  }
}

mealsByArea(getArea());
