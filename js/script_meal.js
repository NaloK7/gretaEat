
async function fullRecipe() {
  console.log('vu');
  // get meal recipe
  let gmr = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  gmr = await gmr.json();

  // nom
  let name = gmr.meals[0].strMeal;
  document.querySelector("#this-name").innerHTML = name;
  document.querySelector("title").innerHTML += name;

  // img path
  let thumbs = gmr.meals[0].strMealThumb;
  document.querySelector("#this-thumbs").src = thumbs;
  document.querySelector("#this-thumbs").alt = name;

  // type
  let category = gmr.meals[0].strCategory;
  document.querySelector("#categorie").innerHTML = category;

  // origine
  let country = gmr.meals[0].strArea;
  document.querySelector("#country").innerHTML = country;


  // ingredients + quantity
  let ingredientsName = [];
  let ingredientsQuantity = [];

  // iterate over the keys and values
  for (const [key, value] of Object.entries(gmr.meals[0])) {
    //   if value is not null or empty
    if (value != "" && value != " " && value != null) {
      // if the key include the word 'ingredient'
      if (key.includes(`Ingredient`)) {
        //   push the value: name of the ingredient in the array ingredientsName
        ingredientsName.push(value);
        //   same as above to get the quantity
      } else if (key.includes(`Measure`)) {
        ingredientsQuantity.push(value);
      }
    }
  }

  // select a div where insert ingredient details
  let displayIng = document.querySelector("#ingredients");
  // associate the name and the quantity of an ingredient and display it
  for (let i = 0; i < ingredientsName.length; i++) {
    displayIng.innerHTML += `<p>${ingredientsName[i]}: ${ingredientsQuantity[i]}</p>`;
  }


  // instructions
  // todo: maybe find a pattern in recipe to split them in multiple line
  let recipe = gmr.meals[0].strInstructions;
  document.querySelector('#recipe').innerHTML += `<p>${recipe}</p>`
  // let steps = recipe.split("STEP ")
  // for (let i = 1; i < steps.length; i++) {
  //   document.querySelector('#recipe').innerHTML += `<p>STEP ${steps[i]}</p>`
  // }

}

let url = document.location;

let search = url.search;

let param = new URLSearchParams(search);
let id = parseInt(param.get("id"));

if (id != null) {
  fullRecipe();
}

