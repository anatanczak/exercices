var lastname = prompt("Entrer votre nom");
var firstname = prompt("Entrer votre prénom");
var genderMale = confirm("Etes-vous un homme ?");


if (lastname == "" && firstname == "") {
    lastname = null;
    firstname = null;
}

if (lastname == null && firstname == null) {
    alert("Hey incognito, welcome to our site.");
} else if (lastname == null && genderMale) {
    alert("Bonjour Monsieur " + firstname + "\n Bienvenue sur notre site web!")
} else if (firstname == null && genderMale) {
    alert("Bonjour Monsieur " + lastname + "\n Bienvenue sur notre site web!")
} else if (genderMale) {
    alert("Bonjour Monsieur " + lastname + " " + firstname + "\n Bienvenue sur notre site web!")
} else if (lastname == null) {
    alert("Bonjour Madame " + firstname + "\n Bienvenue sur notre site web!")
} else if (firstname == null) {
    alert("BonjourMadame " + lastname + "\n Bienvenue sur notre site web!")
} else {
    alert("Bonjour Madame " + lastname + " " + firstname + "\n Bienvenue sur notre site web!")
}





// if (credentialsEntered && genderMale) {
//     alert("Bonjour Monsieur " + lastname + firstname + "\n Bienvenue sur notre site web!");
//     console.log("CredencialsEntered " + credentialsEntered);
//     console.log("Lastame " + lastname);
// } else if (credentialsEntered && !genderMale) {
//     alert("Bonjour Madame " + lastname + firstname + "\n Bienvenue sur notre site web!");
//     console.log(credentialsEntered);
//     console.log("Lastame " + lastname);
// } else if (!credentialsEntered && genderMale) {
//     alert("Sorry John Doe, you havn't entered your name!");
//     console.log(credentialsEntered);
//     console.log("Lastame " + lastname);
// } else {
//     alert("Sorry Jane Doe, you havn't entered your name!");
//     console.log(credentialsEntered);
//     console.log("Lastame " + typeof lastname);
// }