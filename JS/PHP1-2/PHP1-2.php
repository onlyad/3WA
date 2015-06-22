<?php
$aNumbers = array();
for ($iNumber = 100; $iNumber <= 200; $iNumber += 10) {
    $aNumbers[] = $iNumber;
}

echo "<h2>Affichage du tableau - boucle</h2>";
for ($iPosition = 0; $iPosition < count($aNumbers); $iPosition++) {
    echo "<p>" . $iPosition . " = " . $aNumbers[$iPosition] . "</p>";
}

echo "<h2>Affichage du tableau - avec print_r()</h2>";
echo '<pre>';
print_r($aNumbers);
echo '</pre>';

$aNumbers[] = 'test';
$aNumbers[] = 'test';

echo "<h2>Affichage du tableau - avec var_dump()</h2>";
var_dump($aNumbers);