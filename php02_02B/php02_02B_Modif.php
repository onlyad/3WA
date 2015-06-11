<?php
include("php02_02B_Func.php");
//define("sTODO_LIST", "Todo.csv");

$bTaskModify = null;
$iLineToModif = null;
$sTitle = "title";
$sDescription = "description";
$dDate = "2015-06-11";
$sPriority = "Critical";
if (array_key_exists('submit', $_POST)) {

    if ("2bmodify" == $_POST["submit"]) {
        $iLineToModif = $_POST['line'];
        $aTodoLine = get1Todo(sTODO_LIST,$iLineToModif );
        $sTitle = $aTodoLine[0];
        $sDescription = $aTodoLine[1];
        $dDate = $aTodoLine[2];
        $sPriority = $aTodoLine[3];
    }else if ("modify" == $_POST["submit"] || null != $iLineToModif) {
        delTodoLine(sTODO_LIST, $iLineToModif);
        addTodoLine(sTODO_LIST, $_POST );
    } else {

        var_dump($_POST);
    }
//<!--$bTaskModify = addTodoLine(sTODO_LIST, $_POST);-->
}
?>

<html>
<head>
    <?php include('header.inc.php'); ?>
</head>
<body>
<?php include('menu.php'); ?>


<div class="container1">
    <h1>Remove a task</h1>

    <?php if ($bTaskModify) : ?>
        <p class="message">Task removed !</p>
    <?php elseif (false === $bTaskModify) : ?>
        <p class="message">Error modify task <?= $iLineNumber; ?></p>
    <?php endif; ?>

    <form action="" method="post">
        <label for="line">Line to modify </label>
        <select id="line" name="line">
            <?php foreach (getTodoList(sTODO_LIST) as $iLineNumber => $aLine) : ?>
                <option value="<?= $iLineNumber; ?>"><?= implode(' - ', $aLine); ?></option>
            <?php endforeach; ?>
        </select>
        <input type="submit" name="submit" value="2bmodify"/>
    </form>
</div>
</body>
</html>


<div class="container2">
    <h1>Add a task</h1>

    <?php if ($bTaskModify) : ?>
        <p class="message">Task modify</p>
    <?php elseif (false === $bTaskModify) : ?>
        <p class="message">Error modifying task.</p>
    <?php endif; ?>

    <form action="" method="post">
        <div><label for="title">Title</label><input type="text" name="title" id="title" value="<?= $sTitle ?>"/></div>
        <div><label for="description">Description</label><textarea name="description" id="description"
                                                                   value="<?= $sDescription; ?>" rows="4"><?= $sDescription ?></textarea>
        </div>
        <div><label for="date">Date</label><input type="date" name="date" id="date" value = "<?= $dDate; ?>"/></div>
        <div><label for="priority">Priority</label><select name="priority" id="priority">
                <option selected="selected"><?= $sPriority ?></option>
                <option>High</option>
                <option>Medium</option>
                <option>Trivial</option>
            </select></div>
        <div>
            <input type="submit" name="submit" value="modify"/>
        </div>
    </form>
</div>
</body>
</html>