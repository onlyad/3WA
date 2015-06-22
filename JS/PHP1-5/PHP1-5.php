<?php

// on regarde s'il y a une langue
// array_key_exists => existe t il une clé 'lang' dans le tableau $_GET ?
if (array_key_exists('lang', $_GET)) {
    $sLang = $_GET['lang'];
} else {
    // si non, on prend le français par défaut
    $sLang = 'fr';
}

switch ($sLang) {
    case 'fr':
        // titre de la page
        $sTitle = 'Traducteur PHP';
        // Tableaux contenant toutes les traductions
        $aWords = array('chat' => 'cat', 'chien' => 'dog', 'mer' => 'sea', 'soleil' => 'sun');
        break;
    case 'en':
        $sTitle = 'Translator PHP';
        $aWords = array('cat' => 'chat', 'dog' => 'chien', 'sea' => 'mer', 'sun' => 'soleil');
        break;
}

// mots à afficher
$aListedWords = array_keys($aWords);
//$aListedWords =  $aWords;

// si on a un mot à traduire
if (array_key_exists('word', $_POST)) {
    $sTranslateWord = $_POST['word'];
    $sFoundWord = $aWords[$sTranslateWord];
}

if (array_key_exists('word', $_POST)) {
    $sTransateSentence = $sTranslateWord . ' => ' . $sFoundWord;
} else {
    $sTransateSentence = " - ";
}


include('PHP1-5-template.php');


