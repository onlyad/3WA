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

//$iLine = readline("Which Line to delete?");
var $iLine2bDeleted = 3;

if (is_writable(sFILE_TODO)){
    $rFileTodo = fopen(sFILE_TODO, "r+");
    if(false != $rFileTodo) {
        $asLineTodo = fgetcsv($rFileTodo);
        while (false != fgetcsv($rFileTodo) ) {
            $asLineTodo = fgetcsv($rFileTodo);
            $aaLinesTodo [] = $asLineTodo;
        }
    }
    unset($aaLinesTodo[$iLine2bDeleted - 1 ]);
    foreach ($aaLinesTodo as $asLineTodo) {
        fputcsv($rFileTodo, $asLineTodo);
    }
}





?>