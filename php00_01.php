<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-07
 * Time: 9:23 PM
 */
//PHP0 - exercice 1 - boucles
//Ces exercices supplémentaires vont vous permettre de maîtriser les boucles en PHP.
//
//Exercice 1
//
//affichez les nombres de 1 à 100
//
//affichez les nombres de 5 à 25, séparé par des virgules
//
//affichez les multiples de 5 compris entre 0 et 100
//
//affichez les nombres pairs de 20 à 60, séparés par des balises "<br />"
//
//affichez toutes les années depuis votre naissance.
//Chaque année doit être affichée dans une balise "<p>", ayant une classe de "birth_date" (et la valeur de l'année)
//
//affichez les nombres de 50 à 25, en ordre décroissant, sauf le nombre 30.
//
//construisez un array nommé "nums" contenant les nombres 10 à 20 (avec une boucle toujours)
//
//
//
//Exercice 2
//Voici un array numérique,
//
//$tiroir = ["clef", "monnaie", "facture", "facture", "facture"];
//faites un print_r
//affichez toutes les valeurs de l'array.
//affichez toutes les valeurs, séparés par des "<br />"
//
//
//Exercice 3
//Voici un array associatif :
//
//$livre = [
//    "titre" => "A Clash of Kings",
//    "annee" => 2000,
//    "pages" => 562,
//    "auteur" => "George R. R. Martin"
//];
//Affichez toutes les clés et toutes les valeurs dans ce format, sans utiliser directement les clefs dans votre code :
//    clé 1 : valeur 1<br />
//    clé 2 : valeur 2<br />
//
//Exercice 4
//Voici un array multidimensionnel :
//
//$paiements = [
//    ["montant" => 12.55, "date" => "12/02/2013"],
//    ["montant" => 132.11, "date" => "21/11/2013"],
//    ["montant" => 125.00, "date" => "09/03/2013"],
//    ["montant" => 128.11, "date" => "11/12/2012"]
//];
//Affichez tous les paiements
//Chaque paiement doit être contenu dans un div et être affiché sous cette forme :
//<div class="payment">
//   <h3>PAIEMENT</h3>
//   <p>montant : 999.99</p>
//   <p>date : 11/11/1911</p>
//</div>
//3. Améliorer la sémantique de vos blocs, et mettez un peu de mise en forme.

//Exercice 1
//affichez les nombres de 1 à 100
for ($iNumber1To100 = 1; $iNumber1To100 <= 100; $iNumber1To100++ ){
    echo "<br> " . $iNumber1To100;
}

//affichez les nombres de 5 à 25, séparé par des virgules
for ($iNumber5To25 = 5; $iNumber5To25 <= 25; $iNumber5To25++) {
    echo $iNumber5To25 . ", ";
}

//affichez les multiples de 5 compris entre 0 et 100
for ($iMultiplyOf5 = 0; $iMultiplyOf5 <= 100; $iMultiplyOf5 += 5){
    echo "<br> " . $iMultiplyOf5;
}

//Exercice 2
//Voici un array numérique,
//
//$tiroir = ["clef", "monnaie", "facture", "facture", "facture"];
//faites un print_r
//affichez toutes les valeurs de l'array.
//affichez toutes les valeurs, séparés par des "<br />"
$tiroir = ["clef", "monnaie", "facture", "facture", "facture"];
print_r($tiroir);

for ($iPosTiroir = 0; $iPosTiroir < count($tiroir); $iPosTiroir++){
    echo "<br> " . $tiroir[$iPosTiroir];
}


//Exercice 4
//Voici un array multidimensionnel :
//
//$paiements = [
//    ["montant" => 12.55, "date" => "12/02/2013"],
//    ["montant" => 132.11, "date" => "21/11/2013"],
//    ["montant" => 125.00, "date" => "09/03/2013"],
//    ["montant" => 128.11, "date" => "11/12/2012"]
//];
//Affichez tous les paiements
//Chaque paiement doit être contenu dans un div et être affiché sous cette forme :
//<div class="payment">
//   <h3>PAIEMENT</h3>
//   <p>montant : 999.99</p>
//   <p>date : 11/11/1911</p>
//</div>
//3. Améliorer la sémantique de vos blocs, et mettez un peu de mise en forme.

$paiements = [
    ["montant" => 12.55, "date" => "12/02/2013"],
    ["montant" => 132.11, "date" => "21/11/2013"],
    ["montant" => 125.00, "date" => "09/03/2013"],
    ["montant" => 128.11, "date" => "11/12/2012"]];

for ($iPosMontant = 0; $iPosMontant < count($paiements); $iPosMontant++){
    echo "<div class = 'paiement'>";
    echo "<h3>PAIEMENT</h3>";
    echo "<p>montant : " . $paiements[$iPosMontant]["montant"] . "</p>";
    echo "<p>date :" . $paiements[$iPosMontant]["date"] . "</p>";
    echo "</div>";
}