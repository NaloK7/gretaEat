

// get id parameter to fetch specific url
let url = document.location;
let search = url.search;
let param = new URLSearchParams(search);
let id = parseInt(param.get("id"));

async function fullRecipe() {
  // get meal recipe
  let gmr = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  gmr = await gmr.json();

  // meal name
  let name = gmr.meals[0].strMeal;
  document.querySelector("#this-name").innerHTML = name;
  document.querySelector("title").innerHTML += name;

  // meal thumbnail
  let thumbs = gmr.meals[0].strMealThumb;
  document.querySelector("#this-thumbs").src = thumbs;
  document.querySelector("#this-thumbs").alt = name;

  // meal type
  let category = gmr.meals[0].strCategory;
  document.querySelector("#meal-categorie").innerHTML += `<a href="categorie.html?c=${category}">${category}</a>`;

  // meal origin
  let country = gmr.meals[0].strArea;
  // todo add <a href=""></a> to go to country page
  document.querySelector("#meal-country").innerHTML += country;

  // ingredients + quantity
  let ingredientsName = [];
  let ingredientsQuantity = [];

  // iterate over the keys and values
  for (const [key, value] of Object.entries(gmr.meals[0])) {
    // if value is not null or empty
    if (value != "" && value != " " && value != null) {
      // if the key include the word 'ingredient'
      if (key.includes(`Ingredient`)) {
        // push the value: name of the ingredient in the array ingredientsName
        ingredientsName.push(value);
        // same as above to get the quantity
      } else if (key.includes(`Measure`)) {
        ingredientsQuantity.push(value);
      }
    }
  }

  // select a div where insert ingredient details
  let displayIng = document.querySelector("#ingredients");
  // display association of: name and quantity
  for (let i = 0; i < ingredientsName.length; i++) {

    displayIng.innerHTML += `<p><b>${ingredientsName[i]}:</b> ${ingredientsQuantity[i]}</p>`;
  }

  // display recipe instructions
  let recipe = gmr.meals[0].strInstructions;
  document.querySelector("#recipe").innerHTML += `<p>${recipe}</p>`;
}

if (id != NaN || id != null) {
  fullRecipe();
}
