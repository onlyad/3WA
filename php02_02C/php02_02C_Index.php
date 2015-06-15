<?php
/**
 * Created by PhpStorm.
 * User: Dung
 * Date: 2015-06-14
 * Time: 9:17 PM
 */
include("php02_02C_Func.php");
?>
<html>
<head>
    <?php include("php02_02C_Header.inc.php"); ?>
</head>
<body>
<?php include("php02_02C_Menu.php"); ?>

<div class="container">
    <h1>List of all tasks</h1>
    <table>
        <thead>
        <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Date</td>
            <td>Priority</td>
        </tr>
        </thead>
        <tbody>
        <?php foreach (getTodoList(sFileName) as $aTodoLine) : ?>
            <tr>
                <td><?= $aTodoLine[0]; ?></td>
                <td><?= $aTodoLine[1]; ?></td>
                <td><?= $aTodoLine[2]; ?></td>
                <td><?= $aTodoLine[3]; ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>


    </table>

</div>
</body>
</html>
