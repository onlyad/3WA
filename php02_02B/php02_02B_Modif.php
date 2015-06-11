<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php
include('php02_02_Func.php');

$bTask2Modif = null;
if (array_key_exists('submit', $_POST)) {
    $iLineToModif = $_POST['line'];
    $bTaskModif = modifTodoList(CSV_FILE, $iLineToModif);
}
?>


<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/10/2015
 * Time: 11:06 AM
 */
define("sFILE_TODO", "Todo.csv");

//$iLine = readline("Which Line to delete?");
$iLine2bModif = 3;
$asLineTodoModif;;
$aaLinesTodo = [];

//if (is_writable(sFILE_TODO)) {
$rFileTodo = fopen(sFILE_TODO, "r");
if (false != $rFileTodo) {
    $iCountLine = 0;
//        $asLineTodo = fgetcsv($rFileTodo);
    do {
        $asLineTodo = fgetcsv($rFileTodo);
        if ($iLine2bModif == $iCountLine) {
            $asLineTodoModif = $asLineTodo;
//            var_dump($asLineTodoModif);
        }
        if (false != $asLineTodo) {
            $aaLinesTodo [] = $asLineTodo;
        }

        $iCountLine++;

    } while (false != $asLineTodo);
}
fclose($rFileTodo);

$sTitle = $asLineTodoModif[0];
$sDescription = $asLineTodoModif[1];
$dDate = $asLineTodoModif[2];
$sPriority = $asLineTodoModif[3];

//var_dump($_POST);

if (array_key_exists("modif", $_POST)) {
//    echo "<br> modif";
    $iCountLine = 0;
    $asLineTodoModif[0] = $_POST["title"];
    $asLineTodoModif[1] = $_POST["description"];
    $asLineTodoModif[2] = $_POST["dDate"];
    $asLineTodoModif[3] = $_POST["priority"];
//   var_dump($asLineTodoModif);
    foreach ($aaLinesTodo as $asLineTodo) {
//        echo "inside foreach";
//        var_dump($asLineTodo);
        if ($iLine2bModif == $iCountLine) {
//            echo "inside ($iLine2bModif == $iCountLine) ";
            $asLineTodo = $asLineTodoModif;
//            var_dump($asLineTodo);
        }
        $aaLinesTodo[$iCountLine] = $asLineTodo;
//        echo "<br> after add to aaLignesTodo";
//        var_dump($aaLinesTodo);
        $iCountLine++;
    }

}
//var_dump($aaLinesTodo);


$rFileTodo = fopen(sFILE_TODO, "w");
if (false != $rFileTodo) {
    foreach ($aaLinesTodo as $asLineTodo) {
        fputcsv($rFileTodo, $asLineTodo);

    }
}
fclose($rFileTodo);


?>

<div class="container">
    <h1>Modify a task</h1>

    <?php if ($bTaskModif) : ?>
        <p class="message">Task removed !</p>
    <?php elseif (false === $bTaskModif) : ?>
        <p class="message">Error modif task <?= $iLineToModif; ?></p>
    <?php endif; ?>

    <form action="" method="post">
        <label for="line">Line to delete </label>
        <select id="line" name="line">
            <?php foreach (getTodoLists() as $iLineNumber => $aLine) : ?>
                <option value="<?= $iLineNumber; ?>"><?= implode(' - ', $aLine); ?></option>
            <?php endforeach; ?>
        </select>
        <input type="submit" name="submit"/>
    </form>
</div>
</form>

<form method="post" action="">
    Title:
    <input type="text" name="title" value="<?php echo $sTitle; ?>">
    Description:
    <input type="text" name="description" value="<?php echo $sDescription; ?>">
    Date:
    <input type="date" name="dDate" value="<?php echo $dDate; ?>">
    Priority:
    <input type="text" name="priority" value="<?php echo $sPriority ?>">
    <input type="submit" name="modif">
</form>

</body>
</html>
