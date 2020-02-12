let numbers = [];
let answer;
let nameNumber = 1;
let enteredNumber;
let sum = 0;
let average;

// je ne traite pas toute les erreures possibles lors de la saisie
do {
    answer = prompt("saisissez un entier Nr°" + nameNumber + "ou entrer le 0 pour arrêter le saisie.");
    nameNumber++;
    enteredNumber = parseInt(answer)
    if (!isNaN(enteredNumber)) {
        numbers.push(enteredNumber);
    }
} while (answer !== "0");

let lastElement = numbers.pop()

for (const item of numbers) {
    sum = sum + item;
}
average = sum / numbers.length

// TO DO show the sum and the average

alert("La somme des entiers est: " + sum + "La moyenne est " + average)