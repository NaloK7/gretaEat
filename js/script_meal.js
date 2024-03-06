// fonction click sur img → ouvre page meal.html avec les info du plat
// recupere l'id d'un plat
// requete url avec id pour recup info


async function fullRecipe() {

    let url = document.location
    console.log(url);
    let search = url.search
    console.log(search);
    let param = new URLSearchParams(search);
    let id = parseInt(param.get("id"))
    console.log(id)
    // let id = 52772
    // get meal recipe
    let gmr = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    gmr = await gmr.json()

    // nom
    let name = gmr.meals[0].strMeal
    document.querySelector('#this-name').innerHTML = name
    document.querySelector('title').innerHTML += name

    // img path
    let thumbs = gmr.meals[0].strMealThumb
    document.querySelector('#this-thumbs').src = thumbs
    document.querySelector('#this-thumbs').alt = name
    
    // type
    let category = gmr.meals[0].strCategory
    document.querySelector('#categorie').innerHTML = category

    // origine
    let country = gmr.meals[0].strArea
    document.querySelector('#country').innerHTML = country

    // ingredients + quantity    
    let ingredientsName = []
    let ingredientsQuantity = []

    for (const [key, value] of Object.entries(gmr.meals[0])) {
        if (value != "" && value != " " && value != null) {
            if (key.includes(`Ingredient`)) {
                ingredientsName.push(value)
            } else if (key.includes(`Measure`)) {
                ingredientsQuantity.push(value)
            }
        }
    }
    // display ingredients + quantity
    let displayIng = document.querySelector('#ingredients')

    for (let i = 0; i < ingredientsName.length; i++) {
        displayIng.innerHTML += `<p>${ingredientsName[i]}: ${ingredientsQuantity[i]}</p>`;
        
    }

    // instructions
    let recipe = gmr.meals[0].strInstructions
}

fullRecipe()
