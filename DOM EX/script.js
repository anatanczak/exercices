document.getElementById("myButton").addEventListener("click", popupFunc);


function popupFunc() {

  let userInput = document.getElementById("textInput").value;

  if (userInput === "") {
    userInput = "Rien du tout"
  }
  alert("Vous avez saisi: '" + userInput + "'");
}