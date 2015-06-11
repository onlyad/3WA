<?php

$aFruits = ['banana' => 2.3, 'apple' => 1.99, 'raspberry' => 3.5, 'coconut' => 4.2, 'orange' => 1.20];

// nom des fruits
echo '<h2>Fruit names</h2>';
echo '<p>';
$aFruitNames = array_keys($aFruits);
for ($iPos = 0; $iPos < count($aFruitNames); $iPos++) {
    echo $aFruitNames[$iPos] . ' ';
}
echo '</p>';


// fruit + prix par ordre alphabétique
ksort($aFruits);
echo '<h2>Fruits by name</h2>';
echo '<ul>';
foreach ($aFruits as $sFruitName => $fFruitPrice) {
    echo "<li><strong>$sFruitName</strong> : $fFruitPrice $/kg</li>";
}
echo '</ul>';


// fruit + prix par prix
asort($aFruits);
echo '<h2>Fruits by price</h2>';
echo '<ol>';
foreach ($aFruits as $sFruitName => $fFruitPrice) {
    echo "<li><strong>$sFruitName</strong> : $fFruitPrice $/kg</li>";
}
echo '</ol>';
