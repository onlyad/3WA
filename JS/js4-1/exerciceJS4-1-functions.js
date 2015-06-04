const TPS = 5.0; // pour la TPS
const TVQ = 9.975; // pour la TVQ

/**
 * Get the real price to pay in any restaurant.
 *
 * @param  fDisplayPrice display price.
 * @returns float real price to pay.
 */
function realPriceInRestaurant(fDisplayPrice) {
    var fPriceWithTaxes = fDisplayPrice + fDisplayPrice * (TPS + TVQ) / 100;
    return fPriceWithTaxes + fPriceWithTaxes * 15 / 100;
}


/*********************/
/******* BONUS *******/
/*********************/

/**
 * Get the real price to pay in any restaurant.
 *
 * @param  fDisplayPrice display price.
 * @param  fTipsPourcent tips pourcent
 *
 * @returns float real price to pay.
 */
function realPriceInRestaurantCustomTips(fDisplayPrice, fTipsPourcent) {
    var fPriceWithTaxes = fDisplayPrice + fDisplayPrice * (TPS + TVQ) / 100;
    return fPriceWithTaxes + fTipsPourcent * 15 / 100;
}


/**
 * Display matching restaurant prices : menu price / real price to pay.
 *
 * @param  fPriceFrom price to start table
 * @param  fPriceTo price ending table
 * @param  fTipsPourcent tips pourcentage
 */
function displayMatchingRestaurantPrices(fPriceFrom, fPriceTo, fTipsPourcent) {
    document.write('<h2>Intervalle [' + fPriceFrom + ' - ' + fPriceTo + '] avec un pourboire de ' + fTipsPourcent + '%:</h2>');
    document.write('<table>');
    document.write('<thead><tr><th>Prix affiché</th><th>Je paye...</th></tr></thead>');
    for (var fNumber = fPriceFrom; fNumber <= fPriceTo; fNumber += .5) {
        document.write('<tr><td>$' + fNumber + '</td><td>$' + realPriceInRestaurantCustomTips(fNumber, fTipsPourcent) + '</td></tr>');
    }
    document.write('</table>');
}
