// Function to change the background color of the page
function changeBackgroundColor() {
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Variable to store the reference to the new window
let newWindow = null;

// Function to open a new window
function openNewWindow() {
    if (!newWindow || newWindow.closed) {
        newWindow = window.open('', '_blank', 'width=400,height=300');
        newWindow.document.write('<h2 style="text-align: center;">Welcome to the New Window</h2>');
        newWindow.document.body.style.backgroundColor = 'lightgray';
    } else {
        alert('The window is already open!');
    }
}

// Function to close the new window
function closeNewWindow() {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
    } else {
        alert('No window to close!');
    }
}

// Function to handle frame interaction
function manipulateFrames() {
    // Check if frames are available
    if (window.frames.length > 0) {
        let frame = window.frames[0];
        frame.document.write('<p style="color: blue;">This content is from the main page!</p>');
    } else {
        alert('No frames available.');
    }
}

// Create buttons dynamically using JavaScript
function createButtons() {
    // Create "Change Background Color" button
    const changeColorBtn = document.createElement('button');
    changeColorBtn.textContent = 'Change Background Color';
    changeColorBtn.style.margin = '10px';
    changeColorBtn.onclick = changeBackgroundColor;

    // Create "Open New Window" button
    const openWindowBtn = document.createElement('button');
    openWindowBtn.textContent = 'Open New Window';
    openWindowBtn.style.margin = '10px';
    openWindowBtn.onclick = openNewWindow;

    // Create "Close New Window" button
    const closeWindowBtn = document.createElement('button');
    closeWindowBtn.textContent = 'Close New Window';
    closeWindowBtn.style.margin = '10px';
    closeWindowBtn.onclick = closeNewWindow;

    // Create "Manipulate Frames" button
    const manipulateFramesBtn = document.createElement('button');
    manipulateFramesBtn.textContent = 'Manipulate Frames';
    manipulateFramesBtn.style.margin = '10px';
    manipulateFramesBtn.onclick = manipulateFrames;

    // Append buttons to the document body
    document.body.appendChild(changeColorBtn);
    document.body.appendChild(openWindowBtn);
    document.body.appendChild(closeWindowBtn);
    document.body.appendChild(manipulateFramesBtn);
}

// Add a title and initialize buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.textContent = 'DOM and Window Interaction';
    title.style.textAlign = 'center';
    document.body.appendChild(title);

    createButtons();
});
