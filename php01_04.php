<html>
<body>


<form method = 'post' action ="">
<input type="number" name = "mInput" />
<input type="submit" value="Ok" />
</form>


<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/6/2015
 * Time: 3:39 PM
 */
var_dump($_POST);
if (array_key_exists("mInput", $_POST)) {
    echo "<br> " . ($_POST['mInput'] * 2);
}
?>
</body>
</html>