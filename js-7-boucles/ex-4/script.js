let numbers = [];
let numberUserInput;
let nameNumberCount = 1;
let enteredNumberInt;
let sum = 0;
let average;

// je ne traite pas toute les erreures possibles lors de la saisie
do {
    numberUserInput = prompt("saisissez un entier Nr°" + nameNumberCount + "ou entrer le 0 pour arrêter le saisie.");
    nameNumberCount++;
    enteredNumberInt = parseInt(numberUserInput)
    if (!isNaN(enteredNumberInt)) {
        numbers.push(enteredNumberInt);
    }
} while (numberUserInput !== "0");

let lastElement = numbers.pop()

for (const item of numbers) {
    sum = sum + item;
}
average = sum / numbers.length

// TO DO show the sum and the average

alert("La somme des entiers est: " + sum + "La moyenne est " + average)