
let path = document.location
console.log("🚀 ~ path:", path)

let previous = document.referrer
console.log("🚀 ~ previous:", previous)



let logoPaths = [
    "/img/logo1.png",
    "/img/logo2.png",
    "/img/logo3.png",
    "/img/logo4.png",
    "/img/logo5.png",
    "/img/logo6.png"
]

if (previous != path) {
    let src = document.querySelector('#logoimg').src
    src = src.split("/")
    console.log("🚀 ~ src:", src)
    src.slice(-1)

    console.log("🚀 ~ src:", src)

} else {
    console.log('pas changer !!')
}
