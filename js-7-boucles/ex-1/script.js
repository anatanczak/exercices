let names = [];
let answer;
let nameNumber = 1;

do {
    answer = prompt("saisissez le prénom Nr°" + nameNumber + "ou Click sur Annuler pour arrêter le saisie.");
    nameNumber++;
    if (answer !== null && answer !== "") {
        names.push(answer);
    }
    console.log(answer);
} while (answer);

console.log(names.length);