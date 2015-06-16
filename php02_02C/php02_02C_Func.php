<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-15
 * Time: 3:36 PM
 */

define("sTODO_LIST", "Todo.csv");

function getTodoList($sFileName)
{
    $aaTodoList = [];
    $rFileName = fopen($sFileName, "r");
    if (false != $rFileName) {
        do {
            $aTodoLine = fgetcsv($rFileName);
            if (false != $aTodoLine) {
                $aaTodoList [] = $aTodoLine;
            }
        } while (false != $aTodoLine);
    }
    fclose($rFileName);
    return $aaTodoList;
}

function areColumnsFilled($aTodoLine)
{
    foreach ($aTodoLine as $sTodoValue) {
        if ("" == $sTodoValue) {
            return false;
        }
    }

    return true;
}

function appendTodoLine ($sFileName, $aTodoLine) {
    $bAddTodoLine = false;
    if (areColumnsFilled($aTodoLine)){
        $rFileName = fopen($sFileName, "a");
        if (false != $rFileName) {
            $bAddTodoLine = fputcsv($rFileName,$aTodoLine);
            if (false != $bAddTodoLine) {
                $bAddTodoLine = true;
            }
        }
        fclose($rFileName);
    }
    return $bAddTodoLine;

}


function AddTodoLine ($sFileName, $aPOST) {
    $aTodoLine [] = $aPOST["title"];
    $aTodoLine [] = $aPOST["description"];
    $aTodoLine [] = $aPOST["date"];
    $aTodoLine [] = $aPOST["priority"];
    var_dump($aPOST);
    var_dump($aTodoLine);
    return appendTodoLine($sFileName, $aTodoLine);
}
function delTodoLine ($sFileName, $iLineToRemove) {
    $bDelTodoLine = false;
    $aaTodoList = getTodoList($sFileName);
    if ($iLineToRemove >= 0 && $iLineToRemove < count($aaTodoList)  ) {
        $rFileName = fopen($sFileName, "w");
        if ( false != $rFileName) {
            foreach ($aaTodoList as $iLineNumber => $aTodoLine) {
                if ($iLineNumber != $iLineToRemove) {
                    $bDelTodoLine = fputcsv($rFileName, $aTodoLine);
                    if (false != $bDelTodoLine){
                        $bDelTodoLine = true;
                    }
                }
            }
        }
        fclose($rFileName);
        return $bDelTodoLine;
    }

}