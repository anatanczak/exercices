let userInput;
let inputIsValid = false;
let numberToTest;


userInput = prompt("Entrez un nombre entier ?");


// check if user input can be converted into an int
function checkIfStringIsValid(theInput) {

    if (theInput == null || theInput == undefined) {
        return false
    } else if (theInput === "") {
        return false
    } else {
        return !isNaN(theInput);
    }

}


inputIsValid = checkIfStringIsValid(userInput)

// //convert user input into an int

function convertStringIntoInt(theInput, valid) {
    if (valid) {
        let integer = parseInt(theInput);
        return integer
    } else {
        return 0;
    }
}

numberToTest = convertStringIntoInt(userInput, inputIsValid);