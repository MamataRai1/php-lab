<?php
$a = 10;
$b = 20;

function sum() {
    $GLOBALS['result'] = $GLOBALS['a'] + $GLOBALS['b'];
}

sum();
echo "Sum of a and b is: " . $result;
?>
