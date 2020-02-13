let tableau = [];
let tableauLonguer;
let arrayItem;
let itemNumber = 1;


function getInteger() {

    let lengthStr;
    let lengthInt;

    do {
        lengthStr = prompt("saisissez un entier entre 1 et 100 qui vas servir pour la longeur du tableau");
        lengthInt = parseInt(lengthStr)
        if (lengthInt > 0 && lengthInt <= 100) {
            break;
        } else {
            lengthStr = NaN;
        }
    } while (isNaN(lengthStr));
    return lengthInt;
}

tableauLonguer = getInteger();

function initTab(long) {
    tableau.length = long;
}

function saisieTab() {
    let temporaryArray = [];
    let arrayItem;
    do {
        arrayItem = prompt("saisissez un entier entre -1000 et 1000 qui vas servir pour une de valeur du tableau. Vous pouvez saisir autant que vous voulez mais sachiez que le programme prend en compte que le nombre qui correspond à la longuer souhaité du tableau");
        arrayItemInt = parseInt(arrayItem)

        if (arrayItemInt > -1000 && arrayItemInt <= 1000) {
            temporaryArray.push(arrayItem);
        } else if (arrayItem == null) {
            alert("Ok. Merci");
        } else {
            alert("Cela n'est pas une valeur valable.");
        }

    } while (arrayItem != null);

    return temporaryArray;

}

tableau = saisieTab();