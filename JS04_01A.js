/**
 * Created by Dung on 2015-05-31.
 */
//JS4 - exercice 1
//Nous souhaitons connaitre le prix réel que nous allons payer dans un restaurant.
//
//    Nous connaissons toujours le prix avant les taxes, auquel nous devons ajouter TPS et TVQ. Mais, nous devons
// également prendre en compte le pourboire du serveur (ici 15%).
//
//Afficher la table de correspondance de 5$ à 20$ en prenant tous les prix par pas de 0.5.
//    Prix affiché / Prix réel à payer
//
//Exemple :
//    $5 = $6.6110625
//$5.5 = $7.27216875
//    ...
//
//    Optimisez votre code en créant une fonction permettant de calculer n'importe quel prix avant taxes d'un restaurant.
//
//    BONUS
//
//Comment gérer le cas d'un pourboire différent ? Si l'on souhaite donner 20%, 25% ou seulement 5%...
//Améliorer votre code pour afficher différentes tables de correspondance. Attention, il faut répéter le moins de code possible !
//
//    Exemple : on devrait pouvoir afficher les prix :
//    - de 50 à 60 avec 23% de tips
//- de 10 à 15 avec 9% de tips
//- de 22 à 43 avec 19.5% de tips
//    ...

/**
 * Partie 1: la table de correspondance de 5$ à 20$ en prenant tous les prix par pas de 0.5.
 *    Prix affiché / Prix réel à payer
 */

const iPriceRangeMin = 5;
const iPriceRangeMax = 20;
const iPriceRangeIncrementation = 0.5;

document.write("<h2>La table de Prix Affiche vs Prix Reel a Payer avec un pourboire de 15% par defaut:</h2>");
document.write("<table>");
document.write("   <tr>");
document.write("       <th>Prix Affiche</th>");
document.write("       <th>Prix Reel a Payer</th>");
document.write("   </tr>");

for (fPriceRange = iPriceRangeMin; fPriceRange <= iPriceRangeMax; fPriceRange += iPriceRangeIncrementation ){
    document.write("   <tr>");
    document.write("<td>" + fPriceRange + "</td> <td>" + realPriceWithTaxAndTips(fPriceRange) + "</td>" );
    document.write("   </tr>");
}
document.write("</table>");
/**
 * Partie 2: gérer le cas d'un pourboire différent ? Si l'on souhaite donner 20%, 25% ou seulement 5%...
 //Améliorer votre code pour afficher différentes tables de correspondance. Attention, il faut répéter le moins de code possible !
 */

writeDisplayPriceAndRealPrice(50, 60, 0.5, 0.23);
writeDisplayPriceAndRealPrice(10, 15, 0.5, 0.09);
writeDisplayPriceAndRealPrice(22, 43, 0.5, 0.195);