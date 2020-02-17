// // Ex 1

// document.getElementById("myButton").addEventListener("click", popupFunc);


// function popupFunc() {

//   let userInput = document.getElementById("textInput").value;

//   if (userInput === "") {
//     userInput = "Rien du tout"
//   }
//   alert("Vous avez saisi: '" + userInput + "'");
// }


// ex 2 Nombre Magic
let randomNumber = Math.ceil(Math.random() * 100);


document.getElementById("task").innerHTML = " Devinez le nombre magic (entre 0 et 100 ) <br> Entrez votre proposition: "

document.getElementById("myButton").innerHTML = "Verifier"

document.getElementById("myButton").addEventListener("click", verif);

function verif() {
  let userInput = document.getElementById("textInput").value;

  let number = parseInt(userInput);
  let textToDisplay = "Vous n'avez pas rentré un numero valable"
  console.log(randomNumber);

  if (number === randomNumber) {
    textToDisplay = "Bravo!"
    setTimeout(() => {
      if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
      }
    }, 3000);

  } else if (number < randomNumber) {
    textToDisplay = "Plus grand!"
  } else if (number > randomNumber) {
    textToDisplay = "Plus petit!"
  }

  document.getElementById("task").innerHTML = textToDisplay;

}