let url = document.location;
let search = url.search;
let param = new URLSearchParams(search);
let i = param.get("i");
// fetch url + txt
async function getMealsByIngredient() {
  // reset display
  document.querySelector("#categorie").innerHTML = "";
  // get input txt
  // let inputTxt = document.querySelector("#search-meal-input").value;
  // get meals by search
  let gmbs = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}`
    );
    gmbs = await gmbs.json();
  // parse object
    let section = document.querySelector("#categorie");
  section.innerHTML = `
  <h1>Toutes les plats</h1>
  <div class="categorie-container flex_row"></div>`
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
      document.querySelector(".categorie-container").innerHTML += `<article class="categories-article hover-translate">
                <a href="meal.html?id=${id}">
                    <img src="${src}" alt="${name}">
                </a>
                <h2>${name}</h2>
            </article>`;
  }
}


getMealsByIngredient()