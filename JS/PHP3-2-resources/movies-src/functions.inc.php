<?php
define ("sDIR_IMG", "images/");

/**
 * Display a movie duration in hours+minutes.
 *
 * @param integer $iDurationInMinutes duration in minutes.
 *
 * @return string duration in hours+minutes.
 */
function displayDuration($iDurationInMinutes)
{
    $iHours = floor(@$iDurationInMinutes / 60);
    $iMinutes = $iDurationInMinutes % 60;
    $sHoursMinute = $iHours . "h";
    // TODO
    if (0 != $iMinutes) {
        if ($iMinutes <10 ) {
            $sHoursMinute .= "0" . $iMinutes;
        } else {
            $sHoursMinute .= $iMinutes;
        }
    }
    return ($sHoursMinute);
}

/**
 * Display a single movie.
 *
 * @param array $aMovie
 *                       movie to display.
 * @param array $aCovers covers.
 */
function displayMovie(array $aMovie, array $aCovers, $iMoviePos = 0)
{
    $iIndexCover = $aMovie["cover"];
    $sCoverName = $aCovers[$iIndexCover];
    $sTitle = $aMovie['title'];
    echo "<a href = 'movie.php?MoviePos=<?= $iMoviePos; ?>'> <img src=images/$sCoverName></a>";
    echo "<h1>$sTitle" . "  " . displayDuration($aMovie["duration"]) . "</h1>";

}

/**
 * Display a list of movies.
 *
 * @param array $aMovies
 *                       movies to display.
 * @param array $aCovers covers.
 */
function displayMovies(array $aMovies, array $aCovers)
{
    foreach ($aMovies as $asMovie) {
        displayMovie($asMovie, $aCovers);
    }
}


/**
 * Search all movies displayed in a cinema.
 *
 * @param string $sCinema cinema to search.
 * @param array $aCinemas all cinemas.
 * @param array $aMovies all movies.
 *
 * @return array movies displayed in the cinema.
 */
function searchMoviesFromCinema($sCinema, array $aCinemas, array $aMovies)
{
    $iIndex = 0;
    $aMoviesIn1Cinema = [];
    do {
        $asCinema = $aCinemas[$iIndex];
        $iCinema = array_search($sCinema, $asCinema);
        $iIndex++;
//        var_dump($iCinema);
    } while (false == $iCinema);

    $aiCinemaRoom = $asCinema["rooms"];
    foreach ($aiCinemaRoom as $iIndex => $iMovie) {
        $aMoviesIn1Cinema [$iIndex] = $aMovies[$iMovie];
    }
    return ($aMoviesIn1Cinema);
}


/**
 * Search all movies which duration is less than $iDurationMax.
 *
 * @param integer $iDurationMax duration max.
 * @param array $aMovies all movies.
 *
 * @return array matched movies.
 */
function searchMoviesFromDuration($iDurationMax, array $aMovies)
{
    $aMoviesFromDuration = [];
    foreach ($aMovies as $aMovieDetails) {
        if ($iDurationMax > $aMovieDetails["duration"]) {
            $aMoviesFromDuration [] = $aMovieDetails;
        }
    }
    return ($aMoviesFromDuration);
}

