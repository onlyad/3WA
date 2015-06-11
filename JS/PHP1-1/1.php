<?php

// 1
echo "<h2>simple 1 to 20</h2>";
for ($iPos = 1; $iPos <= 20; $iPos++) {
    echo $iPos . ' ';
}

// 2
echo "<h2>with list</h2>";
echo "<ul>";
for ($iPos = 1; $iPos <= 20; $iPos++) {
    echo '<li>' . $iPos . '</li>';
}
echo "</ul>";

// 3
echo "<h2>pair</h2>";
echo "<ul>";
for ($iPos = 2; $iPos <= 20; $iPos += 2) {
    echo '<li>' . $iPos . '</li>';
}
echo "</ul>";