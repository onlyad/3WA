<?php
include('data.inc.php');
include('functions.inc.php');

//searchMoviesFromCinema($sCinema, array $aCinemas, array $aMovies)
//var_dump (searchMoviesFromCinema('MK2 Bibliothèque', $aCinemas, $aMovies ));
//var_dump(searchMoviesFromDuration(94, $aMovies));

//var_dump($_POST);

$sTitlePage = "Films à l'affiche";
$aSearchMovies = $aMovies;
if (array_key_exists("type", $_POST)){

    if ("cinema" == $_POST["type"] ){
       $aCinema = $aCinemas[intval($_POST["cinema"])];
        $sCinema = $aCinema["name"];
//       var_dump($sCinema);
       $aSearchMovies =  searchMoviesFromCinema($sCinema, $aCinemas, $aMovies);
//        var_dump($aMovieIn1Cinema);
//        displayMovies($aMovieIn1Cinema, $aCovers);
        $sTitlePage = "Films présents dans le cinéma " . $sCinema;
    } else {
        $iDurationMax = $_POST["duration"];
        $aSearchMovies = searchMoviesFromDuration($iDurationMax, $aMovies);
        $sTitlePage = "Tous les films de moins de ". displayDuration($iDurationMax);
//        var_dump($_POST);
//        $_POST["duration"] = $iDurationMax;
//        var_dump($_POST);
    }
}


//$aSearchMovies = array();$aSearchMovies = $aMovies;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <title>PHP</title>
    <link rel="stylesheet" type="text/css" href="css/normalize.css"/>
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css"
          href="http://fonts.googleapis.com/css?family=Open+Sans"/>
    <link rel="stylesheet" type="text/css" href="css/movies.css"/>
</head>
<body>
<h1><?php echo $sTitlePage ?></h1>

<?php
displayMovies($aSearchMovies, $aCovers); ?>

<hr/>
<h2>Recherche par cinéma</h2>

<form class="standard-form" method="post" action="">
    <input type="hidden" name="type" value="cinema"/>
    <label for="cinema">Cinéma :</label> <select id="cinema" name="cinema">
        <?php foreach ($aCinemas as $iCinemaPos => $aCinema): ?>
            <option value="<?= $iCinemaPos; ?>"><?= $aCinema['name']; ?></option>
        <?php endforeach; ?>
    </select>
    <input type="submit" value="Rechercher"/>
</form>

<hr/>
<h2>Recherche par durée maximum d'un film</h2>

<form class="standard-form" method="post" action="">
    <input type="hidden" name="type" value="duration"/>
    <label for="duration">Durée en minutes :</label> <input
        type="number" id="duration" name="duration" value="<?= $iDurationMax; ?>" />
    <input type="submit" value="Rechercher"/>
</form>
</body>
</html>