async function getAllCategorie() {
  // fetch to get all categories
  let p = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  let pj = await p.json();

  // parse all categories to display them in an article
  for (let i = 0; i < pj.categories.length; i++) {
    const element = pj.categories[i];
    // get thumbnail
    let src = element.strCategoryThumb;
    // get name
    let name = element.strCategory;

    // display
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
