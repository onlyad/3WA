/**
 * Created by Dung on 2015-06-06.
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
//BONUS
//
//Ajouter devant chaque balise <h2> le numéro du titre h2
//Remplacer toutes les images pour y mettre le logo de la 3WA
//Supprimer le contenu du footer
//Last modified: Wednesday, 3 June 2015, 8:17 PM


//le nombre de balise <p>
var aoTagP = document.querySelectorAll("p");
alert("Number of Tag p : " + aoTagP.length);

//le nombre de balise <p> directement dans une balise <div>
 aoTagP = document.querySelectorAll("div>p");
alert("Number of div>p : " + aoTagP.length);

//modifier le titre <h1> en lui ajoutant la date du jour à la fin
var aoTagH1 = document.querySelectorAll("h1");
dTodayDate = new Date();
for (var iPosH1 = 0; iPosH1 < aoTagH1.length; iPosH1 ++){
    aoTagH1[iPosH1 ].innerHTML = aoTagH1[iPosH1 ].innerHTML + dTodayDate ;
}

//Ajouter devant chaque balise <h2> le numéro du titre h2
aoTagH2 = document.querySelectorAll("h2");
for (var iPosH2  = 0; iPosH2 < aoTagH2.length; iPosH2++){
    aoTagH2[iPosH2].innerHTML = (iPosH2+1) + aoTagH2[iPosH2].innerHTML;
}

aoTagImg = document.querySelectorAll("img");
for (var iPosImg = 0; iPosImg  < aoTagImg.length; iPosImg ++){
    aoTagImg[iIndex].src = "JS05_02_logo3WA.png";
}
// TODO: the one below won't work
document.querySelector('div#footer').innerHTML = '';
document.querySelector("div#footer").innerHTML = '';
//oTagFooter.innerHTML = '';