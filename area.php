<?php
function calaulateCircleArea($radius){
    if ($radius < 0){
        return $area;

    }

    $area = pi() * pow($radius, 2);
    return $area;
}
$testRadii = [3,4,7.5,-3,0];

foreach($testRadii as $radius){
    echo "Radius: $radius, Area:";
    $result = calculateCircleArea($radius);
    echo is_numeric($result) ? number_format($result,2) : $result;
    echo "<br>"
}
?>