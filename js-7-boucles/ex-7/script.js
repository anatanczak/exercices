let answer;
let givenNumber;
let isPrime = true;


// je ne traite pas toute les erreures possibles lors de la saisie
do {
    answer = prompt("saisissez un entier entre 1 et 100");
    givenNumber = parseInt(answer)
    if (givenNumber > 0 && givenNumber <= 100) {
        break;
    } else {
        answer = NaN;
    }
} while (isNaN(answer));

//get the biggest possible diviser of  the given number
let biggestPossibleDiviser = Math.sqrt(givenNumber);
biggestPossibleDiviser = Math.ceil(biggestPossibleDiviser);
// console.log(biggestPossibleDiviser);

if (givenNumber <= 1) {
    isPrime = false;
} else if (givenNumber === 2) {
    isPrime = true;
} else if (givenNumber % 2 === 0) {
    isPrime = false;
} else {

    for (i = 3; i <= biggestPossibleDiviser; i += 2) {
        if (givenNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}


if (isPrime) {
    console.log("prime");
} else {
    console.log("composite");
}



//Algorithm - Sieve of Eratosthenes


// //create an array of all numbers that are 
// let isComposite = [givenNumber + 1];
// console.log(isComposite);

// // array to hold primes
// let primes = [givenNumber / 10];

// for (i = 2; i * i <= givenNumber; i++) {
//     // if prime (ie !== 1)
//     if (isComposite[i] !== 1) {
//         //now mark all composites starting at m^2 which are multiples of m
//         for (j = i * i; j <= givenNumber; j += i) {
//             //mark position z as composite (1)
//             isComposite[j] = 1;
//         }
//     }
// }