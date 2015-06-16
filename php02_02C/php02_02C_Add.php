<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-15
 * Time: 2:50 PM
 */

include("php02_02C_Func.php");
$bTaskAdd = null;
if (array_key_exists("submit", $_POST)){
    $bTaskAdd = addTodoLine(sTODO_LIST, $_POST);
}
?>
<html>
<head>
    <?php include("php02_02C_Header.inc.php"); ?>
</head>
<body>
    <?php include("php02_02C_Menu.php"); ?>
    <div class="container">
        <h1>Add a task</h1>

        <?php if ($bTaskAdd) : ?>
            <p class="message">New task added</p>
        <?php elseif (false === $bTaskAdd) : ?>
            <p class="message">Error Adding Task</p>
        <?php endif; ?>


        <form action="" method="post">
            <div><label for="title">title</label><input type="text" name="title" id="title" value="title"/></div>
            <div><label for="description">description</label><textarea name="description" id="description" rows="5">description</textarea> </div>
            <div><label for="date">date</label><input type="date" name="date" id="date" value="<?= date("Y-m-d"); ?>"/></div>
            <div><label for="priority">priority</label><select name="priority" id="priority">
                    <option selected="selected">Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Trivial</option>
                </select>
            </div>
            <div> <input type="submit" name="submit" value="add"/>
            </div>
        </form>
    </div>
</body>
</html>

