<?php
if (array_key_exists('lang', $_GET)){
    $sLang = $_GET['lang'];
} else {
    $sLang = 'fr';
}
switch($sLang) {
    case "en":
        $sTitle = 'English to French';
        $aWord = ['cat' => 'chat', 'dog' => 'chien' , 'sea' => 'mer', 'sun' => 'soleil'];
        break;
    case 'fr':
        $sTitle = 'Francais au Anglais';
        $aWord = ['chat' => 'cat', 'chien' => 'dog', 'mer' => 'sea', 'soleil' => 'sun' ];
}

?>