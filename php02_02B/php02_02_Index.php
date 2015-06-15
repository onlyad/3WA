<?php
include('php02_02B_Func.php');
?>
<html>
    <head>
        <?php include('header.inc.php'); ?>
    </head>
    <body>
        <?php include('php02_02B_Menu.php'); ?>

        <div class="container">
            <h1>List all tasks</h1>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach (getTodoList(sTODO_LIST) as $aList) : ?>
                        <tr>
                            <td><?= $aList[0]; ?></td>
                            <td><?= $aList[1]; ?></td>
                            <td><?= $aList[2]; ?></td>
                            <td><?= $aList[3]; ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </body>
</html>