<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-16
 * Time: 2:51 PM
 */
include("php02_02C_Func.php");

$bTaskToRemove = null;
if (array_key_exists("submit", $_POST)){
    $iTodoLineToRemove=$_POST['line'];
    $bTaskToRemove = delTodoLine(sTODO_LIST, $iTodoLineToRemove);
}
?>
<html>
<head>
    <?php include ('php02_02C_header.inc.php'); ?>
</head>
<body>
    <?php include ('php02_02C_Menu.php'); ?>
    <div class ="container">
        <h1>Task to be removed</h1>

        <form action="" method="post">
            <label for="line">Line to delete</label>
            <select id="line" name="line">
                <?php foreach (getTodoList(sTODO_LIST) as $iTodoLineToRemove => $aTodoValue ): ?>
                    <option value="<?= $iTodoLineToRemove; ?>"><?= implode(' - ', $aTodoValue); ?> </option>
                <?php endforeach; ?>
            </select>
            <input type="submit" name="submit"/>
        </form>
    </div>
</body>
</html>
