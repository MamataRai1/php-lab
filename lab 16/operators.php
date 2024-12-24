<?php
$x = 10;
$y = 20;

// Logical operators
if ($x > 5 && $y > 10) {
    echo "Both conditions are true.";
} elseif ($x > 5 || $y > 30) {
    echo "At least one condition is true.";
} else {
    echo "None of the conditions are true.";
}
?>
