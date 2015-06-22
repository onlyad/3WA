<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-20
 * Time: 4:27 PM
 */
//Créer un tableau PHP comprenant tous les chiffres de 100 à 200, de 10 en 10.
//
//Ajouter deux autres cases à votre tableau : deux chaines de caractères.
//
//Afficher toutes les cases de votre tableau
//Utiliser la fonction print_r() pour les afficher
//Utiliser la fonction var_dump()

for ($i100To200 = 100; $i100To200 <= 200; $i100To200 += 10  ) {
    echo $i100To200 . ' ' ;
    $a100To200 [] = $i100To200;

}
$a100To200 [] = '1st string';
$a100To200 [] = '2nd string';

print_r($a100To200);
var_dump($a100To200);