
/**
 * display all categories available in TheMealDB API
 */
async function getAllCategorie() {
  let p = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  let pj = await p.json();

  for (let i = 0; i < pj.categories.length; i++) {
    const element = pj.categories[i];
    let src = element.strCategoryThumb;
    let name = element.strCategory;

    document.querySelector(
      ".categories-container"
    ).innerHTML += `<article class="categories-article hover-translate">
        <a href="categorie.html?c=${name}">
  
            <img src="${src}" alt="${name}">
        </a>
        <h2>${name}</h2>
    </article>`;
  }
}

getAllCategorie();
