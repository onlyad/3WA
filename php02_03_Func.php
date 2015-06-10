<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/10/2015
 * Time: 3:49 PM
 */


function arrayPrint($array)
{
    var_dump($array);

}

function textPrint($sString)
{
    echo "<br> $sString";
}

//function displayTitle($sString, $sTitle){
//    switch($sTitle){
//        case "1":
//            echo "<h1> $sString </h1>";
//            break;
//        case "2":
//            echo "<h2> $sString </h2>";
//            break;
//    }
//}

function displayTitle($sString, $iTitleLevel){
    if (is_integer($iTitleLevel) && ($iTitleLevel > 0 && $iTitleLevel <= 6))  {
        echo "<h$iTitleLevel> $sString </h$iTitleLevel>";
    }
}

function newImplode($sGlue, $aArray){
    $sLine = "";
    $iLines = count($aArray) - 1;
    foreach ($aArray as $iCount=>$sString) {

        $sLine = $sLine . $sString;
        if ($iLines != $iCount ) {
            $sLine .= "$sGlue";
        }
    }
    return $sLine;
}


function newImplode1($sGlue, $aArray, $sBegin, $sEnd){
    $sLine = $sBegin;
    $iLines = count($aArray) - 1;
    foreach ($aArray as $iCount=>$sString) {

        $sLine = $sLine . $sString;
        if ($iLines != $iCount ) {
            $sLine .= "$sGlue";
        }
    }
    $sLine .= $sEnd;
    return $sLine;
}