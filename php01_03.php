<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/6/2015
 * Time: 2:21 PM
 */

//PHP1 - exercice 3
//Créer une page permettant d'afficher "bonjour" dans 3 langues : en français, anglais et espagnol.
//
//Vous devrez utiliser les GET pour cet exercice.

switch ($_GET['lang']) {
    case "fr":
        $sMessage = "<br> Bonjour";
        break;
    case "en":
        $sMessage = "<br> Hello";
        break;
    case "es":
        $sMessage = "<br> Hola";
        break;
}
echo $sMessage;

var_dump($_GET);
?>
