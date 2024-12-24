<?php
$file = fopen("data.txt", "r"); // Open file in read mode
if ($file) {
    echo "File Contents: " . fread($file, filesize("data.txt"));
    fclose($file);
} else {
    echo "Error reading file.";
}
?>
