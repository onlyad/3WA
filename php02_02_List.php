<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

</body>
</html>

<?php

const sFILE_TODO = "todo.csv";

$rFileTodo = fopen(sFILE_TODO, "r");
if (false != $rFileTodo) {
    do {
        $aLine  = fgetcsv($rFileTodo);
        if ( false != $aLine) {
            $aaTodo [] = $aLine;
//            echo "var_dump :";
//            var_dump($aLine);
        }
    } while ( false != $aLine);
}

//var_dump($aaTodo);

foreach ($aaTodo as $asVal){
    echo "<br>";
    foreach ($asVal as $sVal  ){
        echo   $sVal . ", "  ;
    }
}

fclose($rFileTodo);
?>