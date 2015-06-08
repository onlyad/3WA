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
    <input type="text" name="sInput" value ="mer">
    <input type="submit" value = "Traduire Francais vers anglais">

</form>

<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/6/2015
 * Time: 4:38 PM
 */
$aDict = ["dog" => ["en" => "dog", "fr" => "chien", "es" => "perro" ],
          "sea" => ["en" => "sea", "fr" => "mer",    "es" => "mar"],
          "happy" => ["en" => "happy", "fr" => "heureux", "es"=> "felir"]
        ];
var_dump($_POST);
if(array_key_exists("sInput", $_POST)) {
    if (array_key_exists($_POST['sInput'], $aDict)) {
        echo "<br> traduction :" . $aDict[$_POST['sInput']]["fr"];
    }
}


?>
</body>
</html>