<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-07
 * Time: 4:27 PM
 */
if (array_key_exists("lang", $_GET)){
    $sLang = $_GET["lang"];
} else {
    $sLang = "fr";
}

switch ($sLang){
    case "fr":
        $sTitle = "Traducteur";
        $aDict = array ("chat" => "cat", "chien" => "dog", "mer" => "sea", "soleil" => "sun");
        break;
    case "en":
        $sTitle = "Translator";
        $aDict = array ("cat" => "chat", "dog" => "chien", "sea" => "mer", "sun" => "soleil");
        break;
}

$aListWords2bTranslated = array_keys($aDict);

if (array_key_exists("word2bTranslated", $_POST )){
    $sTranslatedWords = $_POST["word2bTranslated"] . " => " . $aDict[$_POST["word2bTranslated"]];

} else {
    $sTranslatedWords = " ";
}

include("php01_05A_Template.php");




?>