// todo array of alphabet letter

let alphabet = []

for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(65+i);
    document.querySelector(".test").innerHTML += `<a href="https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}">${letter}</a>`  
}
// 
// `https://www.themealdb.com/api/json/v1/1/search.php?f=`