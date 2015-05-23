/**
 * Created by jour on 5/20/2015.
 */


const NORMAL_PRICE = 100;
const IF_CLIENT_GET_DISCOUNT = "Avez vous une reduction? (O)ui/ (N)on";
const CLIENT_DISCOUNT_PERCENTAGE = "Quel est le percentage de reduction?";
const TPS = 5.0; // pour la TPS
const TVQ = 9.975; // pour la TVQ

var fActualPrice;
var fDiscountAmount;
var fPriceAfterDiscount;
var fPriceAfterTax;
var iAge;
var fDiscountPercentage;

iAge = prompt("Votre age?");

if (iAge < 18) {
    document.write("<p> Vous payez rien!</p>");
}
else if (iAge < 25) {
    fActualPrice = NORMAL_PRICE / 2;
    document.write("<p>Vous payez la moitie prix: " + fActualPrice.toFixed(2) + "</p>");

}
else if (iAge > 77) {
    document.write("<p> Vous n'avez pas à payer, c'est gratuit !</p>")
}
else {

    if (confirm(IF_CLIENT_GET_DISCOUNT)) {
        fDiscountPercentage = parseFloat(prompt(CLIENT_DISCOUNT_PERCENTAGE));

        fDiscountAmount = NORMAL_PRICE * fDiscountPercentage / 100;
        fPriceAfterDiscount = NORMAL_PRICE - fDiscountAmount;
        fPriceAfterTax = (fPriceAfterDiscount * TPS / 100) + (fPriceAfterDiscount * TVQ / 100) + fPriceAfterDiscount;
        fPriceAfterTax = fPriceAfterTax.toFixed(2);

        document.write(
            "<ol>" +
            "<li> Prix Hors Taxe: " + NORMAL_PRICE + "</li>" +
            "<li> Reduction %:" + fDiscountPercentage + "</li>" +
            "<li> Montant de reduction: " + fDiscountAmount + "</li>" +
            "<li> Prix apres reduction: " + fPriceAfterDiscount + "</li>" +
            "<li> Prix apres tax:" + fPriceAfterTax + "</li>" +
            "</ol>");
    }

    else {
        document.write("<p>Vous payez plein prix!</p>");
    }
}


