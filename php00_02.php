<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-07
 * Time: 10:07 PM
 */

//Exercice 1
//Voici un array numérique
//
//$tiroir = ["clef", "monnaie", "facture", "facture", "facture"];
//Affichez la deuxième valeur
//Faites un print_r de cet array
//    Affichez la dernière valeur (sans compter, vous etes développeur et paresseux)
//Ajoutez un autre élément dans l'array

$tiroir = ["clef", "monnaie", "facture1", "facture2", "facture3"];
print_r($tiroir);
echo $tiroir[count($tiroir) -1];
$tiroir[] = "mirroir";
print_r($tiroir);


//Exercice 2
//Voici un array associatif :
//
//$livre = [
//    "titre" => "A Clash of Kings",
//    "annee" => 2000,
//    "pages" => 562,
//    "auteur" => "George R. R. Martin"
//];
//Ajouter l'ISBN (0-553-10803-4)
//Ajouter le prix (25,98)
//Affichez uniquement le nombre de page, en concaténant la chaine "Nombre de pages : "
//Affichez le titre dans un balise h3. Cette balise doit avoir une classe de "book_title".

$livre = [
    "titre" => "A Clash of Kings",
    "annee" => 2000,
    "pages" => 562,
    "auteur" => "George R. R. Martin"
];
$livre ["ISBN" ] =  "0-553-10803-4";
$livre ["prix" ] = 25.98;
var_dump($livre);