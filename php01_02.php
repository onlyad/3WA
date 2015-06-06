<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/6/2015
 * Time: 11:49 AM
 */
/**
PHP1 - exercice 2
Créer un tableau PHP comprenant tous les chiffres de 100 à 200, de 10 en 10.

Ajouter deux autres cases à votre tableau : deux chaines de caractères.

Last modified: Thursday, 4 June 2015, 2:32 PM
*/
echo "<table border='1'>";
echo "   <tbody>";
echo "       ";
for ($iRow = 100; $iRow <200; $iRow += 10){
    echo "<tr>";
    for ($iCol = 0; $iCol < 10 ; $iCol++ ) {
        echo "   <td>" . ($iRow + $iCol) . "</td>";
        }
    echo "</tr>";
}
echo "   </tbody>";
echo "</table>";

$iIndexRow = 0;
for ($iValueFr100To200 = 100; $iValueFr100To200 <= 200; $iValueFr100To200+= 10){
    $aNumber100To200[$iIndexRow] = $iValueFr100To200;
    $iIndexRow++;
}
// When the loop for end, $iIndexRow is count one extra number;
$aNumber100To200 [$iIndexRow] = "Hello1";
$iIndexRow++;
$aNumber100To200 [$iIndexRow] = "Hello2";

for ($iIndexRow = 0; $iIndexRow < count($aNumber100To200); $iIndexRow++) {
    echo "<br>" . $aNumber100To200[$iIndexRow];
}


//Utiliser la fonction print_r() pour les afficher
echo "<br>";
print_r($aNumber100To200);


//Utiliser la fonction var_dump()
var_dump($aNumber100To200);

?>