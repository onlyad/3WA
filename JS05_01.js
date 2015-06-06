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
//Faites la même chose en utilisant les querySelector


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

aoTitleH1 = document.querySelectorAll("h1");
for (iIndex = 0; iIndex < aoTitleH1.length; iIndex++) {
    alert("query H1 innerHTML: " + aoTitleH1[iIndex].innerHTML + ". Class: " + aoTitleH1[iIndex].className);
}

oTitleH2ClassLeft = document.querySelector("h2");
alert("query H2: " + oTitleH2ClassLeft.innerHTML + "Class " + oTitleH2ClassLeft.className);

aoTitleH2Class = document.querySelectorAll("h2");
for (iIndex = 0; iIndex < aoTitleH2Class.length; iIndex++) {
    alert("query H2 innerHTML: " + aoTitleH2Class[iIndex].innerHTML + ". Class: " + aoTitleH2Class[iIndex].className);
}
oTitleH1IdTitle = document.querySelector("#title");
alert("query id title: " + oTitleH1IdTitle.innerHTML + ", Id: " + oTitleH1IdTitle.id);

oTitleH1IdTitle = document.querySelector("h1#title");
alert("query h1#title: " + oTitleH1IdTitle.innerHTML + ", Id: " + oTitleH1IdTitle.id);


oTitleH2ClassLeft = document.querySelector(".left");
alert("query h2 class left: " + oTitleH2ClassLeft.innerHTML + ", Class NAme " + oTitleH2ClassLeft.className);


//The below is not working since
// oTitleH1IdTitle = document.querySelector("h1#id");
//alert("query:" + oTitleH1IdTitle.innerHTML + " Id " + oTitleH1IdTitle.id);

