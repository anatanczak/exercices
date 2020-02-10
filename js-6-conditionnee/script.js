var birthYear;
var currentYear = new Date().getFullYear();
var validUserInput = false;
var interger;
var age;
var legalAge = false;


birthYear = prompt("Quelle est votre année de naissance ?");


// check if user inPut can be converted into an int
function checkUserInput(userinput) {

    if (userinput == null || userinput == undefined) {
        return false
    } else if (userinput === "") {
        return false
    } else {
        return !isNaN(userinput);
    }

}


validUserInput = checkUserInput(birthYear)

//convert user input into an int

function convertStringIntoInt(integer, currentYear, valid) {
    if (valid) {
        var year = parseInt(integer);

        if (year >= 1900 && year <= currentYear) {
            return year;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

birthYear = convertStringIntoInt(birthYear, currentYear, validUserInput);

if (birthYear == 0) {
    alert("Désolé, vous navez pas entré une année de naissance valable.");
} else {
    age = currentYear - birthYear;

    if (age >= 18) {
        legalAge = true;
    }

    if (legalAge) {
        alert("Vous avez " + age + "ans et vous êtes majeur.");
    } else {
        alert("Vous avez " + age + "an(s) et vous êtes mineur.");
    }
}