<?php
$file = fopen("essay.txt", "r"); // Open file in read mode
if ($file) {
    $wordCount = 0;
    $word = "";

    while (($char = fgetc($file)) !== false) {
        if (ctype_space($char)) {
            if (!empty($word)) {
                $wordCount++;
                $word = ""; // Reset word
            }
        } else {
            $word .= $char; // Build word
        }
    }

    // Account for the last word if any
    if (!empty($word)) {
        $wordCount++;
    }

    fclose($file);
    echo "Word Count: " . $wordCount;
} else {
    echo "Error reading file.";
}
?>
