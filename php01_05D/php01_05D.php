<!DOCTYPE html>
<html>
<body>


<form method='post' action=''>
    <input type='text' name="input">
    <input type="submit" name="en-fr" value="Translate English to French">
    <input type="submit" name="fr-en" value="Traduire Francais vers Anglais">
    </form>

</body>
</html>
<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-20
 * Time: 3:05 PM
 */

if (array_key_exists('input', $_POST)) {
    $aKeyOfPost = array_keys($_POST);
    $sLang = $aKeyOfPost[1];
    var_dump($sLang);

    switch ($sLang) {
        case 'en-fr':
            $aWord = ['cat' => 'chat', 'dog' => 'chien', 'sea' => 'mer', 'sun' => 'soleil'];
            echo $_POST['input'] . " => " . $aWord[$_POST['input']];
            break;
        case 'fr-en':
            $aWord = ['chat' => 'cat', 'chien' => 'dog', 'mer' => 'sea', 'soleil' => 'sun' ];
            echo $_POST['input'] . " => " . $aWord[$_POST['input']];
    }

}
?>

