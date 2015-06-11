<?php
include("php02_02B_Func.php");
define("sTODO_LIST", "Todo.csv");

$bTaskRemoved = null;
if (array_key_exists('submit', $_POST)) {
    $iLineToRemove = $_POST['line'];
    $bTaskRemoved = delTodoLine(sTODO_LIST, $iLineToRemove);
}
?>
<html>
<head>
    <?php include('header.inc.php'); ?>
</head>
<body>
<?php include('menu.php'); ?>
<div class="container">
    <h1>Remove a task</h1>

    <?php if ($bTaskRemoved) : ?>
        <p class="message">Task removed !</p>
    <?php elseif (false === $bTaskRemoved) : ?>
        <p class="message">Error removing task <?= $iLineToRemove; ?></p>
    <?php endif; ?>

    <form action="" method="post">
        <label for="line">Line to delete </label>
        <select id="line" name="line">
            <?php foreach (getTodoList(sTODO_LIST) as $iLineNumber => $aLine) : ?>
                <option value="<?= $iLineNumber; ?>"><?= implode(' - ', $aLine); ?></option>
            <?php endforeach; ?>
        </select>
        <input type="submit" name="submit"/>
    </form>
</div>
</body>
</html>
