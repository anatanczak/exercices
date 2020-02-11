let inputNumber1String;
let inputNum1Int;
let inputNumber2String;
let inputNum2Int;
let sum = 0;

// je ne traite pas la situation quand le n2 est < n1

do {
    inputNumber1String = prompt("Entrez un nombre en entier de 0 à 100.");
    inputNum1Int = parseInt(inputNumber1String);
    if (inputNum1Int > 0 && inputNum1Int <= 100) {
        console.log(inputNum1Int);
    } else {
        inputNumber1String = NaN;
    }
} while (isNaN(inputNumber1String));

do {
    inputNumber2String = prompt("Entrez un nombre en entier de 0 à 100.");
    inputNum2Int = parseInt(inputNumber2String);
    if (inputNum2Int > 0 && inputNum2Int <= 100) {
        console.log(inputNum2Int);
    } else {
        inputNumber2String = NaN;
    }
} while (isNaN(inputNumber2String));

for (i = inputNum1Int; i <= inputNum2Int; i++) {
    sum = sum + i
}

console.log(sum)