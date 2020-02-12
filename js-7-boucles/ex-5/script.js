let firstAnswer;
let multiplier;
let secondAnswer;
let multiplicand;

// je ne traite pas toute les erreures possibles lors de la saisie
do {
    firstAnswer = prompt("saisissez un entier entre 1 et 100 qui vas servir de multiplicateur");
    multiplier = parseInt(firstAnswer)
    if (multiplier > 0 && multiplier <= 100) {
        break;
    } else {
        firstAnswer = NaN;
    }
} while (isNaN(firstAnswer));

do {
    secondAnswer = prompt("saisissez un entier entre 1 et 100 qui vas servir de multiplicand");
    multiplicand = parseInt(secondAnswer)
    if (multiplicand > 0 && multiplicand <= 100) {
        break;
    } else {
        secondAnswer = NaN;
    }
} while (isNaN(secondAnswer));

for (i = 1; i < multiplier; i++) {
    console.log(i + " x " + multiplicand + " = " + i * multiplicand);
}