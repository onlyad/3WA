<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>PHP</title>
</head>
<body>
<nav>
    <ul>
        <li><a href="?lang=fr">français</a></li>
        <li><a href="?lang=en">english</a></li>
    </ul>
</nav>
<h1><?php echo $sTitle; ?></h1>

<p><?php echo $sTransateSentence; ?></p>

<form method="post" action="5.php?lang=<?= $sLang; ?>">
    <label>Word</label>
    <select name="word">
        <?php for ($iPos = 0; $iPos < count($aListedWords); $iPos++) {
            echo '<option>' . $aListedWords[$iPos] . '</option>';
        } ?>
    </select>
    <input type="submit" value="submit"/>
</form>
</body>
</html>