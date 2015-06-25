/**
 * Created by Dung on 2015-06-24.
 */
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

//A l'aide des fonctions du DOM, afficher :
//le nombre de balise <p>
aoTagP = document.querySelectorAll("p");
iNumberTagP = aoTagP.length;
document.write("Nombre de P:" + iNumberTagP);


//le nombre de balise <p> directement dans une balise <div>
aoTagDivP = document.querySelectorAll("div > p");
document.write("<br> Nombre de P directement dans une balise <div> " + aoTagDivP.length);


//modifier le titre <h1> en lui ajoutant la date du jour à la fin
aoTagH1 = document.querySelector("h1");
dTodayDate = new Date();
aoTagH1.innerHTML = aoTagH1.innerHTML + dTodayDate;

//Ajouter devant chaque balise <h2> le numéro du titre h2
aoTagH2 = document.querySelectorAll("h2");
for (iPos = 0; iPos < aoTagH2.length; iPos++){
    aoTagH2[iPos].innerHTML = (iPos + 1) + aoTagH2[iPos].innerHTML;
}

//Remplacer toutes les images pour y mettre le logo de la 3WA
aoTagImg = document.querySelectorAll("img");
for (iPos=0; iPos <aoTagImg.length; iPos++) {
    aoTagImg[iPos].src = "JS05_02_logo3WA.png";
}

oTagFooter = document.querySelector("#footer");
oTagFooter.innerHTML = " ";