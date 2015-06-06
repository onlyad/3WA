<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/6/2015
 * Time: 11:28 AM
 */
/**  Partie 1:
Afficher tous les nombres de 1 à 20 à la suite
Les afficher dans une liste HTML
*/
 echo "<ol>";
for ($iIndex = 1; $iIndex <= 20; $iIndex++){
    echo "<li>" . $iIndex . "</li>";
}
echo "</ol>";

/**  Partie 2:
Afficher tous les nombres de 1 à 20 à la suite
Les afficher dans une liste HTML. Afficher uniquement les nombres pairs
 */
echo "<ol>";
for ($iIndex = 0; $iIndex <= 20; $iIndex+=2){
    echo "<li>" . $iIndex . "</li>";
}
echo "</ol>";

?>