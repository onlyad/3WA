<html>
<body>
<form action="" method="post">
    <input type="number" name="number"/>
    <input type="submit" value="ok"/>
</form>
<?php
if (array_key_exists('number', $_POST)) {
    $iNumber = $_POST['number'];
    echo $iNumber * 2;
}
?>
</body>
</html>
