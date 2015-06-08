<!--/**-->
<!--* Created by PhpStorm.-->
<!--* User: Dung-->
<!--* Date: 2015-06-07-->
<!--* Time: 4:28 PM-->
<!--*/-->

<!DOCTYPE html>
<html lang = "fr">
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>
<nav>
    <ul>
        <li> <a href="?lang=fr">Francais</a></li>
        <li> <a href="?lang=en">English</a></li>
    </ul>
</nav>


<h1> <?php echo $sTitle; ?></h1>

<form method="post" action="PHP1-5.php?lang=<?= $sLang; ?>">
<form method="post" action="php01_05A.php?lang<?= $sLang; ?>">
    <label>Word</label>
    <select name="word2bTranslated">
        <?php for ($iPos = 0; $iPos < count($aListWords2bTranslated); $iPos++){
            echo  "<option>" . $aListWords2bTranslated[$iPos] . "</option>";
        } ?>
    </select>
  <input type="submit" value="submit"/>
</form>

<h2> <?php echo $sTranslatedWords; ?> </h2>
</body>
</html>

