<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-19
 * Time: 7:51 PM
 */
//PHP2 - exercice 1 - tri des tableaux
//Pour faire différents tris, vous pouvez regarder cette page.
//
//Créer un tableau contenant cinq fruits (minimum) avec leur prix au kilo (par exemple des bananes à 2,3€/kg, pommes à 1.99€/kg...)
//Afficher le nom de tous les fruits dans un paragraphe
//Afficher tous les fruits avec leur prix par ordre alphabétique dans une liste html
//Afficher tous les fruits triés par prix dans une liste numérotée

$aFruits = [ "apple" => 4.30, "orange" => 2.70, "coconut" => 2, "grape" => 3.88, "berry" => 5.12  ];

//Afficher le nom de tous les fruits dans un paragraphe
echo "<p>";
foreach ($aFruits as $sFruitName => $fPricePerKg) {
    echo $sFruitName . ",";
}
echo "</p>";

//Afficher tous les fruits avec leur prix par ordre alphabétique dans une liste html
ksort($aFruits);
echo "<ul>";
foreach ($aFruits as $sFruitName => $fPricePerKg){
    echo "<li>" . $sFruitName . ", price per kg: " . $fPricePerKg . "</li>";
}
echo "</ul>";


//Afficher tous les fruits triés par prix dans une liste numérotée
asort($aFruits);
echo "<ol>";
foreach ($aFruits as $sFruitName => $fPricePerKg) {
    echo "<li>" . $sFruitName . ", Price Per Kg: " . $fPricePerKg . "</li>";
}
echo "</ol>";

