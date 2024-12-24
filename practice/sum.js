function calculateSum() {
    const input = document.getElementById("numberInput").value;
    const numbers = input.split(",").map(Number);  

    numbers.forEach(num => {
        sum += num;  
    });

    document.getElementById("result").textContent = `Sum: ${sum}`;  
}
