<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/10/2015
 * Time: 2:17 PM
 */



define("sFILE_TODO", "Todo.csv");

function getTodoLists (){
    $rFileTodo = fopen(sFILE_TODO, "r");
    if (false != $rFileTodo) {
        do {
            $aLine = fgetcsv($rFileTodo);
            if (false != $aLine) {
                $aaTodo [] = $aLine;
//            echo "var_dump :";
//            var_dump($aLine);
            }
        } while (false != $aLine);
    }
    fclose($rFileTodo);
    return $aaTodo;
}

