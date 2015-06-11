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
fclose($rFileTodo);

//var_dump($aaTodo);
echo "<table>";
foreach ($aaTodo as $asVal){
    echo "<tr>";
    foreach ($asVal as $sVal  ){
        echo "<td> $sVal  </td>"  ;
    }
    echo "</tr>";
}
echo "</table>";


?>