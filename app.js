
// Get the image elements by their ID and store them in variables below 
let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');


// Add an event listener to the window object that listens for the scroll event
window.addEventListener('scroll', function() {
    
    // Get the scroll value and store it in a variable
    let value = window.scrollY;

    // Change the style of the image elements based on the scroll value
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})