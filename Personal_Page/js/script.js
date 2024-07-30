// Get the SVG elements for T and C
const svgT = document.getElementById('mainRect');
const svgC = document.getElementById('bigCircle');

function cyberTheme() {
    // Change theme to cyber colors 
    document.documentElement.style.setProperty('--primary-color', getComputedStyle(document.documentElement).getPropertyValue('--new-primary-color'));
    document.documentElement.style.setProperty('--secondary-color', getComputedStyle(document.documentElement).getPropertyValue('--new-secondary-color'));
    document.documentElement.style.setProperty('--background-color', getComputedStyle(document.documentElement).getPropertyValue('--new-background-color'));
    document.documentElement.style.setProperty('--link-color', getComputedStyle(document.documentElement).getPropertyValue('--new-link-color'));
}

function originalTheme() {
    // Revert to original theme colors
    document.documentElement.style.setProperty('--primary-color', '#00B7AF');
    document.documentElement.style.setProperty('--secondary-color', '#333');
    document.documentElement.style.setProperty('--background-color', '#D7EFDA');
    document.documentElement.style.setProperty('--link-color', '#FDD401');
}

// Event listener for T
svgT.addEventListener('click', cyberTheme);

// Event listener for C
svgC.addEventListener('click', originalTheme);
