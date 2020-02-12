var lastname = prompt("Entrer votre prénom");
var firstname = prompt("Entrer votre prénom");
var genderMale = confirm("Etes-vous un homme ?");
var number = 36;

if (lastname == "" && firstname == "") {
    lastname = null;
    firstname = null;
}

var credentialsEntered = (lastname != null) && (firstname != null);

if (credentialsEntered && genderMale) {
    alert("Bonjour Monsieur " + lastname + firstname + "\n Bienvenue sur notre site web!");
    console.log("CredencialsEntered " + credentialsEntered);
    console.log("Lastame " + lastname);
} else if (credentialsEntered && !genderMale) {
    alert("Bonjour Madame " + lastname + firstname + "\n Bienvenue sur notre site web!");
    console.log(credentialsEntered);
    console.log("Lastame " + lastname);
} else if (!credentialsEntered && genderMale) {
    alert("Sorry John Doe, you havn't entered your name!");
    console.log(credentialsEntered);
    console.log("Lastame " + lastname);
} else {
    alert("Sorry Jane Doe, you havn't entered your name!");
    console.log(credentialsEntered);
    console.log("Lastame " + typeof lastname);
}
