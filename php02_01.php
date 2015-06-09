<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/9/2015
 * Time: 11:32 AM
 */
//http://php.net/manual/fr/array.sorting.php
//PHP2 - exercice 1 - tri des tableaux
//Pour faire différents tris, vous pouvez regarder cette page.
//
//Créer un tableau contenant cinq fruits (minimum) avec leur prix au kilo
// (par exemple des bananes à 2,3€/kg, pommes à 1.99€/kg...)
//Afficher le nom de tous les fruits dans un paragraphe
//Afficher tous les fruits avec leur prix par ordre alphabétique dans une liste html
//Afficher tous les fruits triés par prix dans une liste numérotée

$aFruits = ["lemon" => 1 , "orange" => 2, "banana" => 2.5, "apple" => 1.5, "apricot" => 3];

//Afficher le nom de tous les fruits dans un paragraphe
echo "<p>";
foreach ($aFruits as $sKey => $sVal){
    echo $sKey . ", ";
}
echo "</p>";

//$aKeysFruits = array_keys($aFruits);
//print_r( $aKeysFruits . "<;

//Afficher tous les fruits avec leur prix par ordre alphabétique dans une liste html
ksort($aFruits);
echo "<ul>";
foreach ($aFruits as $sKey => $sVal) {
    echo "<li>" . $sKey . ". Price per kg : " . $sVal . "</li>";
}
echo "</ul>";


//Afficher tous les fruits triés par prix dans une liste numérotée
asort($aFruits);
echo "<ol>";
foreach ($aFruits as $sKey => $sVal){
    echo "<li>" . $sKey . ". Price per kg : " . $sVal . "</li>";
}
echo "</ol>";