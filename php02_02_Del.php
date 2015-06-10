<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php

define("sFILE_TODO", "Todo.csv");

//$iLine = readline("Which Line to delete?");
$iLine2bDeleted = 3;
$aaLinesTodo = [];

//if (is_writable(sFILE_TODO)) {
$rFileTodo = fopen(sFILE_TODO, "r");
if (false != $rFileTodo) {
    $iCountLine = 0;
//        $asLineTodo = fgetcsv($rFileTodo);
    do {
        $asLineTodo = fgetcsv($rFileTodo);
        if ($iLine2bDeleted != $iCountLine) {
//            echo "<br> line: $iCountLine. Line 2b delete: $iLine2bDeleted";
            if (false != $asLineTodo) {
                $aaLinesTodo [] = $asLineTodo;
            }
        }

        $iCountLine++;

    } while (false != $asLineTodo);
}
fclose($rFileTodo);

//var_dump($aaLinesTodo);


$rFileTodo = fopen(sFILE_TODO, "w");
if (false != $rFileTodo) {
    foreach ($aaLinesTodo as $asLineTodo) {
        fputcsv($rFileTodo, $asLineTodo);

    }
}
fclose($rFileTodo);



?>
</body>
</html>
