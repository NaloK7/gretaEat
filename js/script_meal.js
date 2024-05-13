
/**
 * @returns { string } id of a meal
 */
function getId() {
  let url = document.location;
  let search = url.search;
  let param = new URLSearchParams(search);
  let id = parseInt(param.get("id"));
  return id;
}

/**
 * display a specific meal using it's Id passed in parameter, using TheMealDB API
 * @param {string} id id of a meal
 */
async function fullRecipe(id) {
  let gmr = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  gmr = await gmr.json();

  let name = gmr.meals[0].strMeal;
  let thumbs = gmr.meals[0].strMealThumb;
  let category = gmr.meals[0].strCategory;
  let country = gmr.meals[0].strArea;
  let ingredientsName = [];
  let ingredientsQuantity = [];
  let recipe = gmr.meals[0].strInstructions;

  document.querySelector("#this-name").innerHTML = name;
  document.querySelector("title").innerHTML += name;
  document.querySelector("#this-thumbs").alt = name;

  document.querySelector("#this-thumbs").src = thumbs;

  document.querySelector(
    "#meal-categorie"
  ).innerHTML += `<a href="categorie.html?c=${category}">${category}</a>`;

  document.querySelector(
    "#meal-country"
  ).innerHTML += `<a href="area.html?a=${country}">${country}</a>`;

  for (const [key, value] of Object.entries(gmr.meals[0])) {
    if (value != "" && value != " " && value != null) {
      if (key.includes(`Ingredient`)) {
        ingredientsName.push(value);
      } else if (key.includes(`Measure`)) {
        ingredientsQuantity.push(value);
      }
    }
  }

  let displayIng = document.querySelector("#ingredients");
  for (let i = 0; i < ingredientsName.length; i++) {
    displayIng.innerHTML += `<p><b><a href="ingredient.html?i=${ingredientsName[i]}">${ingredientsName[i]}</a>:</b> ${ingredientsQuantity[i]}</p>`;
  }

  document.querySelector("#recipe").innerHTML += `<p>${recipe}</p>`;
}


if (getId() != NaN || getId() != null) {
  fullRecipe(getId());
}
