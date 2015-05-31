/**
 * Created by Dung on 2015-05-31.
 */
const fTPS = 0.05;
const fTVQ = 0.09975;

/**
 * Partie 1: la table de correspondance de 5$ à 20$ en prenant tous les prix par pas de 0.5.
 *    Prix affiché / Prix réel à payer
 */
function realPriceWithTaxAndTips (fDisplayPriceNoTaxNoTips) {
    var realPriceWithTax  = fDisplayPriceNoTaxNoTips * (1 + (fTPS + fTVQ));
    return realPriceWithTax * 1.15;
}

/**
 * Partie 2: gérer le cas d'un pourboire différent ? Si l'on souhaite donner 20%, 25% ou seulement 5%...
 //Améliorer votre code pour afficher différentes tables de correspondance. Attention, il faut répéter le moins de code possible !
 */

function realPriceWithTaxAndCustomTips (fDisplayPriceNoTaxNoTips, fTipsInPercentage) {
    var realPriceWithTax  = fDisplayPriceNoTaxNoTips * (1 + (fTPS + fTVQ));
    return realPriceWithTax * (1 + fTipsInPercentage) ;
}


function writeDisplayPriceAndRealPrice (iPriceRangeMin, iPriceRangeMax, iPriceRangeIncr, fTipsPercent) {
    document.write("<h2>La table de Prix Affiche entre " + iPriceRangeMin + " et " + iPriceRangeMax +
    " avec Prix Reel a Payer avec un pourboire de " + fTipsPercent +
    " en % donne par usager:</h2>");
    document.write("<table>");
    document.write("   <tr>");
    document.write("       <th>Prix Affiche</th>");
    document.write("       <th>Prix Reel a Payer</th>");
    document.write("   </tr>");

    for (fPriceRange = iPriceRangeMin; fPriceRange <= iPriceRangeMax; fPriceRange += iPriceRangeIncr) {
        document.write("   <tr>");
        document.write("<td>" + fPriceRange + "</td> <td>" + realPriceWithTaxAndCustomTips(fPriceRange, fTipsPercent) + "</td>");
        document.write("   </tr>");
    }
    document.write("</table>");
}

