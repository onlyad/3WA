<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>


<form method="post" action="">
    Title:
    <input type="text" name="title" value = "">
    Description:
    <input type="text" name="description" value = "">
    Date:
    <input type="datetime" name="date" value = "">
    Priority:
    <input type="text" name="priority" value = "">
    <input type="submit" name="add">
</form>

</body>
</html>

<?php

const sFILE_TODO = "todo.csv";

if (array_key_exists("add", $_POST)) {


    $rFileTodo = fopen(sFILE_TODO, "a"); // c'est plus performance car pas besoin de lire. On fait une seule chose a la fois.
    if ("" != $_POST["Title"]) {
        if (false != $rFileTodo) {
            $aVal [] = $_POST["title"];
            $aVal [] = $_POST["description"];
            $aVal [] = $_POST["date"];
            $aVal [] = $_POST["priority"];
            var_dump($aVal);

            fputcsv($rFileTodo, $aVal);

        }
    }


    fclose($rFileTodo);
}



?>