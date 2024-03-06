// fonction click sur img → ouvre page meal.html avec les info du plat
// recupere l'id d'un plat
// requete url avec id pour recup info


async function fullRecipe(id) {
    // get meal recipe
    let gmr = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    gmr = await gmr.json()
    console.log(gmr)
}

//  ouvre ma page avec les infos dedans
