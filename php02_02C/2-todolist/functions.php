<?php

define ('CSV_FILE', 'todo.csv');


/**
 * Get to do list as array.
 *
 * @param string $sFilePath file path.
 * @return array to do list as array.
 */
function getTodoList($sFilePath)
{
    $aTodoList = [];
    // ouvre le fichier en lecture seule : protection d'édition
    $rCsvFile = fopen($sFilePath, 'r');

    if (false != $rCsvFile) {
        do {
            // récupère une ligne du fichier sous forme de tableau
            $aLine = fgetcsv($rCsvFile, 1000);
            // fin du fichier : $aLine => false
            if (false != $aLine) {
                $aTodoList[] = $aLine;
            }
        } while (false != $aLine);
        // ferme le fichier
        fclose($rCsvFile);
    }

    return $aTodoList;
}

/**
 * Add a line in the to do list file.
 *
 * @param string $sFilePath file path.
 * @param array $aNewLine new line to add.
 * @return bool true if success, false otherwise.
 */
function addTodoList($sFilePath, $aNewLine)
{
    $bReturn = false;
    if (areColumnsFilled($aNewLine)) {
        // ouvre le fichier CSV en écriture à la fin du fichier
        $rFile = fopen($sFilePath, 'a');
        if (false != $rFile) {
            // écrit toutes les valeurs à la dernière ligne
            fputcsv($rFile, $aNewLine);
            $bReturn = true;
        } else {
            $bReturn = false;
        }
        // ferme le fichier
        fclose($rFile);
    }

    return $bReturn;
}


/**
 * Check if all columns are well filled.
 *
 * @param array $aColumns columns as array.
 * @return bool true if all columns are well filled, false otherwise.
 */
function areColumnsFilled($aColumns)
{
    foreach ($aColumns as $sColumnValue) {
        // si une colonne n'est pas remplie, on n'ira pas plus loin
        if ('' == $sColumnValue) {
            return false;
        }
    }
    return true;
}

/**
 * Remove a specific line in the to do list.
 *
 * @param string $sFilePath file path.
 * @param int $iLineToRemove line position to remove.
 * @return bool true if success, false otherwise.
 */
function removeTodoList($sFilePath, $iLineToRemove)
{
    // numéro de ligne inférieur à zéro
    if ($iLineToRemove < 0) {
        $bReturn = false;
    } else {

        // récupération de la liste des tâches sous forme de tableau
        $aAllLines = getTodoList($sFilePath);

        // condition de sortie : la ligne n'existe pas
        if ($iLineToRemove > count($aAllLines)) {
            $bReturn = false;
        } else {

            // ouvre le fichier CSV en écriture et vide son contenu
            $rFile = fopen($sFilePath, 'w');
            // si le fichier est bien ouvert
            if (false != $rFile) {
                // pour chaque ligne
                foreach ($aAllLines as $iLineNumber => $aLineValues) {
                    // on enregistre seulement si ce n'est pas la ligne à supprimer
                    if ($iLineToRemove != $iLineNumber) {
                        fputcsv($rFile, $aLineValues);
                    }
                }
                $bReturn = true;
            } else {
                // le fichier n'a pas pu être ouvert
                $bReturn = false;
            }
            // ferme le fichier
            fclose($rFile);
        }
    }

    return $bReturn;
}