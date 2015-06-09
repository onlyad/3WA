<!--PHP1 - exercice 5 - traducteur-->
<!--Créer une page web permettant de traduire un mot du français vers l'anglais.-->
<!--Le mot devra être choisi par l'utilisateur parmi : chat, chien, mer, soleil...-->
<!---->
<!--Permettre d'effectuer la traduction dans un sens ou dans l'autre.-->
<!---->
<!--BONUS-->
<!---->
<!--Ajouter une autre langue : l'espagnol. Tous vos mots devront pouvoir être traduit du français vers l'anglais ou l'espagnol.-->
<!--Permettre de traduire d'une langue à une autre-->
<!--Last modified: Thursday, 4 June 2015, 2:35 PM-->

<!DOCTYPE html>
<html>
<body>


<form method="post" action="">
    <input type="text" name="sInput">
    <input type="submit" name="en-fr" value="Traduire Anglais vers Francais">
    <input type="submit" name="en-es" value="Traduire Anglais vers Spanish">
    <input type="submit" name="fr-en" value="Traduire Francais vers Anglais">

</form>

<?php

/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/6/2015
 * Time: 4:38 PM
 */
$aDictEn2FrNEs = ["dog" => [ "en-fr" => "chien", "en-es" => "perro"],
    "sea" => [ "en-fr" => "mer", "en-es" => "mar"],
    "happy" => [ "en-fr" => "heureux", "en-es" => "felir"]
];

$aDictFr2EnNEs = ["chien" => ["fr-en" => "dog", "fr-es" => "perro"],
    "mer" => ["fr-en" => "sea",  "fr-es" => "mar"],
    "heureux" => ["fr-en" => "happy", "fr-es" => "felir"]
];

var_dump($_POST);
$aKeysPOST = array_keys($_POST);
$sLangTranslate =  $aKeysPOST[1];

if (array_key_exists("sInput", $_POST)) {

    switch ($sLangTranslate) {
        case "fr-en":

            if (array_key_exists($_POST['sInput'], $aDictFr2EnNEs)) {
                echo "<br> traduction :" . $aDictFr2EnNEs[$_POST['sInput']][$sLangTranslate];
                }
            break;
        case "en-fr":
        case "en-es":
            if (array_key_exists($_POST['sInput'], $aDictEn2FrNEs)) {
                echo "<br> traduction :" . $aDictEn2FrNEs[$_POST['sInput']][$sLangTranslate];
                }
            break;
    }

}


?>
</body>
</html>