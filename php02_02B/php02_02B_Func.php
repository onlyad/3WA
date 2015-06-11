<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-11
 * Time: 10:04 AM
 */

function getTodoList($sFileName)
{
    $aaTodoList = [];
    $rFileName = fopen($sFileName, "r");
    die("tst");
    var_dump($rFileName);
    if (false != $rFileName) {
        $aTodoLine = fgetcsv($rFileName);
        $aaTodoList [] = $aTodoLine;
        var_dump($aaTodoList);
    }
    fclose($rFileName);

    return $aaTodoList;
}
getTodoList("Todo.csv");