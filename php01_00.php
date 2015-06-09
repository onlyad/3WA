<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/9/2015
 * Time: 11:00 AM
 */

$fruits = array("lemon", "orange", "banana", "apple");
sort($fruits);
foreach ($fruits as $key => $val) {
    echo "fruits[" . $key . "] = " . $val . "\n";
}
?>