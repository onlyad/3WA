<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-11
 * Time: 10:04 AM
 */

define("sTODO_LIST", "Todo.csv");
/**
 * @param  string $sFileName
 * @return array  array of array of List Todo
 */
function getTodoList($sFileName)
{
    $aaTodoList = [];
    $rFileName = fopen($sFileName, "r");
//    die("tst");

    if (false != $rFileName) {
        do {
            $aTodoLine = fgetcsv($rFileName);
            if (false != $aTodoLine) {
                $aaTodoList [] = $aTodoLine;

            }
        } while (false != $aTodoLine);
    }
    fclose($rFileName);
//    var_dump($aaTodoList);
    return $aaTodoList;
}

function getTodoListMinus1Todo($sFileName, $iTodoLine)
{
    $iIndex = 0;
    $aaTodoList = [];
    $rFileName = fopen($sFileName, "r");
//    die("tst");
    if (false != $rFileName) {
        do {
            $aTodoLine = fgetcsv($rFileName);
            if (false != $aTodoLine && $iTodoLine != $iIndex) {
                $aaTodoList [] = $aTodoLine;

            }
            $iIndex++;
        } while (false != $aTodoLine);
    }
    fclose($rFileName);

    return $aaTodoList;
}

function get1Todo($sFileName, $iTodoLine)
{
    $aaTodoList = getTodoList($sFileName);
return $aaTodoList[$iTodoLine];
}

function appendTodoLine($sFileName, $aTodoLine)
{
    $rFileName = fopen($sFileName, "a");
    if (false != $rFileName) {
        $bSuccessAddTodoLine = fputcsv($rFileName, $aTodoLine);
    }
    fclose($rFileName);
    return $bSuccessAddTodoLine;
}

function addTodoLine($sFileName, $aPost)
{
$aTodoLine [] = $aPost ["title"];
    $aTodoLine [] = $aPost ["description"];
    $aTodoLine [] = $aPost ["date"];
    $aTodoLine [] = $aPost ["priority"];
    return appendTodoLine($sFileName, $aTodoLine);
}

function putTodoList($sFileName, $aaTodoList)
{
    $rFileName = fopen($sFileName, "w");
    if (false != $rFileName) {
        foreach ($aaTodoList as $aTodoLine) {
            fputcsv($rFileName, $aTodoLine);
        }
    }
    fclose($rFileName);
}

function delTodoLine($sFileName, $iTodoLine2bRemove)
{
    $aaTodoList = getTodoListMinus1Todo($sFileName, $iTodoLine2bRemove);
    putTodoList($sFileName, $aaTodoList);

}


//$aTodoLine = [ "Todo7", "Desc7", "Date7", "Priority7"];
//$aaTodoList = getTodoListMinus1Todo("Todo.csv", 3);
//putTodoList("Todo.csv", $aaTodoList);

