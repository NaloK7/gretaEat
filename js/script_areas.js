// 

async function getAllAreas() {
    // fetch to get all areas
    let gaa = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    gaa = await gaa.json();
  
    // parse all areas to display them in an article
    for (let i = 0; i < gaa.meals.length; i++) {
      const element = gaa.meals[i];
      // get thumbnail
      let src = element.strCategoryThumb;
      // get name
      let name = element.strArea;
  
      // display
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
  