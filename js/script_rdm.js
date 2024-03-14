

let idRdmMeal;

async function getRandomMeal() {
  // random meal request
  let rmr = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  rmr = await rmr.json();

  // meal thumbnail
  let mealThumbs = rmr.meals[0].strMealThumb;

  // meal name
  let mealName = rmr.meals[0].strMeal;
  // display thumbnail
  let setMealThumbs = document.querySelector("#rdm-meal-thumbs");
  setMealThumbs.src = mealThumbs;
  setMealThumbs.alt = mealName;

  // display name
  let setMealName = document.querySelector("#rdm-meal-name");
  setMealName.innerHTML = mealName;

  // meal origin
  let mealOrigin = rmr.meals[0].strArea;
  // meal categorie
  let mealCategorie = rmr.meals[0].strCategory;

  // display origin and categorie
  let setMealCountry = document.querySelector("#rdm-meal-ctg-from");
  setMealCountry.innerHTML = `${mealOrigin}'s ${mealCategorie}`;

  // meal id
  idRdmMeal = rmr.meals[0].idMeal;
  // create link with meal id
  let mealLink = document.querySelector("#mealLink");
  mealLink.href += idRdmMeal;

}
try {
  getRandomMeal();
} catch (error) {
  alert("une erreur c'est produite");
}
