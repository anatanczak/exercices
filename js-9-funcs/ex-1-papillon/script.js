//jshint esversion: 6

function produit(x, y) {
  return x * y;
}

let result = produit(3, 5);
document.getElementById("title1").innerHTML = "Le cube de 3 égale à 27.";
document.getElementById("title2").innerHTML = "Le produit de 3 x 5 est égale à " + result + ".";

function afficheImg(imgName) {
  var newImage = document.createElement("IMG");
  newImage.setAttribute("src", imgName);
  newImage.setAttribute("width", "100");
  newImage.setAttribute("height", "100");
  newImage.setAttribute("alt", "papillon");
  document.body.appendChild(newImage);
}
afficheImg("papillon.jpg");



//ex 2 compter le nombre de lettres
function letterCounter(phrase, lettre) {
let count = 0;

  if (phrase === undefined || lettre === undefined) {
    return 0;
  }
if ((typeof phrase === 'string' || phrase instanceof String) && (typeof lettre === 'string' || lettre instanceof String) ){
  for (const letter of phrase) {
    if (letter === lettre) {
      count++;
    }
  }
}

  return count;
}
console.log(letterCounter("hohoho", "o"));
console.log(letterCounter("hohoho", 1));
console.log(letterCounter("hohoho"));
