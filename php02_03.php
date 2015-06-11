<?php
/**
 * Created by PhpStorm.
 * User: jour
 * Date: 6/10/2015
 * Time: 4:08 PM
 */

include('php02_03_Func.php');

displayTitle("Hello", 1);
displayTitle("Hello", 2);
displayTitle("Hello", 3);
displayTitle("Hello", 258);
displayTitle("Hello", -58.8554);
displayTitle("Hello", "test");
displayTitle("Hello", false);

$aArray = [ "1", "2", "3", "4"];
echo newImplode(";", $aArray );