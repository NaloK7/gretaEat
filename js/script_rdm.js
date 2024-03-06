let idRdmMeal

async function getRandomMeal() {
    // random meal request
    let rmr = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    rmr = await rmr.json()

    // miniature du plat
    let mealThumbs = rmr.meals[0].strMealThumb

    // nom du plat
    let mealName = rmr.meals[0].strMeal

    // affichage de l'image    
    let setMealThumbs = document.querySelector('#rdm-meal-thumbs')
    setMealThumbs.src = mealThumbs
    setMealThumbs.alt = mealName

    // affichage du nom
    let setMealName = document.querySelector('#rdm-meal-name')
    setMealName.innerHTML = mealName

    // pays du plat
    let mealOrigin = rmr.meals[0].strArea
    // categorie du plat
    let mealCategorie = rmr.meals[0].strCategory

    // affichage pays et categorie
    let setMealContry = document.querySelector("#rdm-meal-ctg-from")
    setMealContry.innerHTML = `${mealOrigin}'s ${mealCategorie}`

    // id du plat
    idRdmMeal = rmr.meals[0].idMeal
    // construction url avec id en parametre
    document.querySelector('#mealLink').href += idRdmMeal
    

}
try {
    getRandomMeal()
} catch (error) {
    alert('une erreur c\'est produite')
}
