let tableau = [];
let lengthStr;
let lengthInt;
let arrayItem;
let itemNumber = 1;


do {
    lengthStr = prompt("saisissez un entier entre 1 et 100 qui vas servir pour la longeur du tableau");
    lengthInt = parseInt(lengthStr)
    if (lengthInt > 0 && lengthInt <= 100) {
        break;
    } else {
        lengthStr = NaN;
    }
} while (isNaN(lengthStr));

do {
    arrayItem = prompt("saisissez un entier Nr°" + itemNumber + "ou appuer Annuler pour arrêter le saisie.");
    itemNumber++;
    if (arrayItem !== null);
    tableau.push(arrayItem);

} while (arrayItem !== null);

alert(tableau);