let url = document.location;
let search = url.search;
let param = new URLSearchParams(search);
let c = param.get("c");

async function mealsByCtg() {
  // get all meals request
  let gamr = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`
  );
  gamr = await gamr.json();

  // parse all meal to display them in an article
  for (let i = 0; i < gamr.meals.length; i++) {
    const element = gamr.meals[i];
    //   get thumbnail
    let src = element.strMealThumb;
    // get name
    let name = element.strMeal;
    // get id
    let id = element.idMeal
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

mealsByCtg();
