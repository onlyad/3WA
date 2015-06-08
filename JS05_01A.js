/**
 * Created by Dung on 2015-06-06.
 */
/**
JS5 - exercice 1 - DOM
Créer une page HTML ayant le code HTML suivant :

    <h1 id="title">Title</h1>
<h2 class="left">left sub title</h2>
<h2 class="right">right sub title</h2>
Afficher dans un popup, le contenu du titre h1.
    Afficher dans plusieurs popup, toutes les classes des titres h2.
    Faites la même chose en utilisant les querySelector
Last modified: Wednesday, 3 June 2015, 5:20 PM
 */

var oTagH1 = document.getElementById("title1");
alert("getElementByID : " + oTagH1.innerHTML);

var aoTagH2 = document.getElementsByClassName("left");
for (iIndex = 0; iIndex < aoTagH2.length; iIndex ++ ) {
    alert("getElementsByClassName  of InnerHtml of H2: " + aoTagH2[iIndex].innerHTML);
}

oTagH1 = document.querySelector('#title2');
alert("QuerySelector on id title2 tag h1: " + oTagH1.innerHTML);

aoTagH2 = document.querySelectorAll(".left");
for (iIndex = 0; iIndex < aoTagH2.length; iIndex ++ ) {
    alert("querySelector on class Left for InnerHtml of H2: " + aoTagH2[iIndex].innerHTML);
}

aoTagH2 = document.querySelectorAll("h2");
for (iIndex = 0; iIndex < aoTagH2.length; iIndex ++ ) {
    alert("querySelector on h2 for InnerHtml of H2: " + aoTagH2[iIndex].innerHTML);
}