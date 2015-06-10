<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<form method="post" action="">
    Title:
    <input type="text" name="Title">
    Description:
    <input type="text" name="Description">
    Date:
    <input type="text" name="Date">
    Priority:
    <input type="text" name="Priority">
    <input type="submit" name="add">
</form>


</body>
</html>

<?php

const sFILE_TODO = "todo.csv";
if (array_key_exists("add", $_POST)) {


    $rFileTodo = fopen(sFILE_TODO, "a+");
    if ("" != $_POST["Title"]) {
        if (false != $rFileTodo) {
            $aVal [] = $_POST["Title"];
            $aVal [] = $_POST["Description"];
            $aVal [] = $_POST["Date"];
            $aVal [] = $_POST["Priority"];
            var_dump($aVal);

            fputcsv($rFileTodo, $aVal);

        }
    }


    fclose($rFileTodo);
}



?>