<?php
$file = fopen("data.txt", "w"); // Open file in write mode
if ($file) {
    fwrite($file, "Hello, World!");
    fclose($file);
    echo "File created and written successfully.";
} else {
    echo "Error creating file.";
}
?>
