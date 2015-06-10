



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
 * Date: 6/9/2015
 * Time: 2:37 PM
 */

//PHP2 - exercice 2 - TODO list
//    On vous propose de gérer une TODO list (liste de choses à faire).
//
//Pour ce faire vous devrez pouvoir stocker :
//
//le titre
//la description
//la date
//la priorité
//Vous devez proposer une page pour ajouter une nouvelle tâche, une pour lister toutes les tâches,
// et une autre pour en supprimer.
//
//BONUS
//
//Ajouter une page de modification
//Ajouter une page pour copier une ligne
//Faire la même chose en utilisant le format JSON
//Prévoir un mécanisme pour convertir le fichier CSV en fichier JSON si celui-ci n'existe pas.
//On ne vous demandera jamais de tout effacer, mais bien de conserver ce qui existe en le modifiant, sans repartir de zéro.

const sFILE_TODO = "todo.csv";

$asTodo = [["Achat Laptop", "Lenovo T450S", "2015-06-08", "Important"],
            ["Chercher le package", "Au Depanneur", "2015-06-09", "Very Important" ],
            ["Dormir", "8h", "2015-06-10", "Important" ]];


function putTodo ($rFileTodo, $asTodo ){
    $rFileTodo = fopen(sFILE_TODO, "a+");
    if (false != $rFileTodo) {
        foreach ($asTodo as $iKey => $sVal) {
            fputcsv($rFileTodo, $sVal);
        }
    }


     fclose($rFileTodo);
    }


$rFileTodo = fopen(sFILE_TODO, "r");
    if (false != $rFileTodo) {
        do {
            $aLine  = fgetcsv($rFileTodo);
            $aaTodo [] = $aLine;
//            echo "var_dump :";
//            var_dump($aLine);
        } while ( false != $aLine);
    }

var_dump($asTodo);

foreach ($aaTodo as $asVal){
    echo "<br>";
    foreach ($asVal as $sVal  )
    echo   $sVal . ", "  ;
}

fclose($rFileTodo);


