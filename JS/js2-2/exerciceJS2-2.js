const NORMAL_PRICE = 10;

// Déclaration du prix du ticket
var iTicketPrice, iClientAge;

// On demande l'age
iClientAge = parseInt(prompt('Quel est votre age ?'));


if (iClientAge < 18) {
    // gratuit pour les moins de 18 ans
    iTicketPrice = 0;
} else if (iClientAge <= 25) {
    // moitié prix pour les moins de 25 ans
    iTicketPrice = NORMAL_PRICE / 2;
} else {
    // prix normal dans les autres cas
    iTicketPrice = NORMAL_PRICE;
}


document.write('<p>Vous avez ' + iClientAge + ' ans.</p>');
document.write('<p>Le prix du ticket est : ' + iTicketPrice + '</p>');


/************
 * BONUS
 ************/
document.write('<h2>BONUS</h2>');

iClientAge = parseInt(prompt('Quel est votre age ?'));


if (iClientAge < 18) {
    // gratuit pour les moins de 18 ans
    iTicketPrice = 0;
} else if (iClientAge <= 25) {
    // moitié prix pour les moins de 25 ans
    iTicketPrice = NORMAL_PRICE / 2;
} else if (iClientAge >= 77) {
    iTicketPrice = 0;
} else {
    // prix normal dans les autres cas
    iTicketPrice = NORMAL_PRICE;
}

if (iTicketPrice == 0) {
    document.write("<p>Vous n'avez pas à payer, c'est gratuit !</p>");
} else {
    document.write('<p>Le prix du ticket est : ' + iTicketPrice + '</p>');
}
