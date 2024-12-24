<?php
$students = [
    "alisa" => 85,
    "parina" => 78,
    "susmeena" => 92,
    
];

$totalGrades = 0;
foreach ($students as $name => $grade) {
    echo "Student: $name, Grade: $grade<br>";
    $totalGrades += $grade;
}

$averageGrade = $totalGrades / count($students);
echo "Average Grade: " . number_format($averageGrade, 2);
?>
