/**
 * Created by Dung on 2015-05-28.
 */

//Nous souhaitons connaitre le prix réel que nous allons payer dans un restaurant.
//
//    Nous connaissons toujours le prix avant les taxes, auquel nous devons ajouter TPS et TVQ. Mais, nous devons également prendre en compte le pourboire du serveur (ici 15%).
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
//Comment gérer le cas d'un pourboire différent ? Si l'on souhaite donner 20%, 25% ou seulement 5%...
//Améliorer votre code pour afficher différentes tables de correspondance. Attention, il faut répéter le moins de code possible !

//const fTPS = 5;
//const fTVQ = 9.975;
//const fTIP = 15;

//const fAMOUNT_INCREMENT = 0.5;

var fPriceMin = 5;
var fPriceMax = 20;


var fPriceB4Tax = 0;
var fPriceAfterTax = 0;
var fTips = 0;

fTips = parseFloat(prompt("% Tips?"));
fPriceMin = parseFloat(prompt("What is the Min Price?"));
fPriceMax = parseFloat(prompt("What is the Max Price?"));

displayPrices(5, 20, 15);

//document.write("<table border='1'" +
//                "<tr>" +
//                "</tr>")
