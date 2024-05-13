
/**
 * display all country available in TheMealDB API
 */
async function getAllAreas() {
  let gac = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  gac = await gac.json();

  for (let i = 0; i < gac.meals.length; i++) {
    const element = gac.meals[i];
    let name = element.strArea;

    document.querySelector(
      ".categories-container"
    ).innerHTML += `<article class="categories-article hover-translate">
          <a class="country-name" href="area.html?a=${name}">
              <h2>${name}</h2>
          </a>
      </article>`;
  }
}

getAllAreas();
