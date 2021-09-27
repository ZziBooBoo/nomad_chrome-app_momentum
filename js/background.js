const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

//console.log(chosenImage);

const bgImage = document.createElement('img');
// console.log(bgImage); --> <img>

bgImage.src = `img/${chosenImage}`
// console.log(bgImage); --> <img src="img/a.jpg">

document.body.appendChild(bgImage);
