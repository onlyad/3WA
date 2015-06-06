/**
 * Created by jour on 6/4/2015.
 */
//JS5 - exercice 2 - Wikipedia
//Récupérer une page Wikipedia et l'enregistrer sur votre poste.
//
//Supprimer toutes les balises <script>.
//
//A l'aide des fonctions du DOM, afficher :
//
//le nombre de balise <p>
//le nombre de balise <p> directement dans une balise <div>
//modifier le titre <h1> en lui ajoutant la date du jour à la fin
//
//
//BONUS
//
//
//
//Ajouter devant chaque balise <h2> le numéro du paragraphe
//Remplacer toutes les images pour y mettre le logo de la 3WA
//Supprimer le footer

var aoTagP = document.querySelectorAll("p");
var dTodayDate = new Date();

document.write("<br> Nombre de P: " + aoTagP.length );

var aoTagDivP = document.querySelectorAll("div>p");
document.write("<br> Nombre de div>p: " + aoTagDivP.length );

var aoTagSpan = document.querySelectorAll("span");
for (var iIndex = 0; iIndex < aoTagSpan.length; iIndex++) {
    aoTagSpan[iIndex].innerHTML = aoTagSpan[iIndex].innerHTML + dTodayDate
}



var aoTagH2 = document.querySelectorAll("h2");
for ( iIndex = 0; iIndex < aoTagH2.length; iIndex++) {
    aoTagH2[iIndex].innerHTML = (iIndex + 1) + aoTagH2[iIndex].innerHTML;
}

var aoTagImg = document.querySelectorAll("img");
for ( iIndex = 0; iIndex < aoTagImg.length; iIndex++) {
    aoTagImg[iIndex].src = "logo3WA.png";
}
var aoTagFooter = document.querySelectorAll("#footer");
for ( iIndex = 0; iIndex < aoTagFooter.length; iIndex++) {
    aoTagFooter[iIndex].innerHTML = "";
}