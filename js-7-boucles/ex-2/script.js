let inputNumberString;
let inputNumInt;

do {
    inputNumberString = prompt("Entrez un nombre en entier de 0 à 100.");
    inputNumInt = parseInt(inputNumberString);
    if (inputNumInt > 0 && inputNumInt <= 100) {
        console.log(inputNumInt);
    } else {
        inputNumberString = NaN;
    }
} while (isNaN(inputNumberString));

for (i = 0; i < inputNumInt; i++) {
    console.log(i);
}