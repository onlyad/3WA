/**
 * Created by jour on 6/4/2015.
 */

//
//JS5 - exercice 1 - DOM
//Créer une page HTML ayant le code HTML suivant :
//
//    <h1 id="title">Title</h1>
//<h2 class="left">left sub title</h2>
//<h2 class="right">right sub title</h2>
//Afficher dans un popup, le contenu du titre h1.
//    Afficher dans plusieurs popup, toutes les classes des titres h2.


alert(document.getElementById("title").innerHTML);
var oTitleH1IdTitle = document.getElementById("title");
alert(oTitleH1IdTitle.innerHTML);

var  aoTitleH2ClassLeft = document.getElementsByClassName("left");
for (var iIndex = 0; iIndex < aoTitleH2ClassLeft.length; iIndex++){
    alert(aoTitleH2ClassLeft[iIndex].innerHTML);
}

var aoTitleH2ClassRight = document.getElementsByClassName("right");
for ( iIndex = 0; iIndex < aoTitleH2ClassRight.length; iIndex++){
    alert(aoTitleH2ClassRight[iIndex].innerHTML);
}