let str = "hello world";
let reversedStr = "";
let index = str.length - 1;

do {
    reversedStr += str[index];
    index--;
} while (index >= 0);

console.log(reversedStr); 
