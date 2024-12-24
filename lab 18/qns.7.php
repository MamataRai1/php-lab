<?php
$file = fopen("search.txt", "r"); // Open file in read mode
if ($file) {
    while (($line = fgets($file)) !== false) {
        if (trim($line) === "STOP") {
            break;
        }
        echo $line . "<br>";
    }
    fclose($file);
} else {
    echo "Error reading file.";
}
?>
