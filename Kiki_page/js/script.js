// Change font by day of the week
const fontsByDay = [
    "Benne-Regular", // Sunday
    "Exo",      // Monday
    "Gluten", // Tuesday
    "Grand",         // Wednesday
    "Jersey",    // Thursday
    "Kurale", // Friday
    "Sevillana"      // Saturday
];

function changeFontBasedOnDay() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay()

    const fontForToday = fontsByDay[dayOfWeek];
    document.body.style.fontFamily = fontForToday;
}

window.addEventListener("load", changeFontBasedOnDay);



// Function to change the text when the mouse hovers over the h1
const h1Element = document.querySelector("h1");
function changeTextOnHover() {
    h1Element.textContent = "魔女の宅急便";
}

// Function to reset the text when the mouse leaves the h1
function resetTextOnMouseOut() {
    
    h1Element.textContent = "Kiki's Delivery Service"; 
    
}

h1Element.addEventListener("mouseover", changeTextOnHover); 
h1Element.addEventListener("mouseout", resetTextOnMouseOut); 



// Change the color scheme of the page 
let bodyElement = document.body;
let headerElement = document.querySelector("header"); 
let footerElement = document.querySelector("footer"); 
let grid2 = document.getElementById("grid2");
let grid5 = document.getElementById("grid5");
let nav = document.getElementById("flex-container");

const newTextColor = "#402722";
const newBackgroundColor = "#DABBA9";
const newBanner = "#8C4E37";

let theme = 0; // Theme toggle state
function adjustThemeColor() {
    if (theme === 0) {
        bodyElement.style.backgroundColor = newBackgroundColor;
        bodyElement.style.color = newTextColor;
        headerElement.style.backgroundColor = newBanner;
        footerElement.style.backgroundColor = newBanner;
        grid2.style.backgroundColor = newBanner; 
        grid5.style.backgroundColor = newBanner;
        nav.style.backgroundColor = "#CF7C7D";
        theme = 1; 
    } else {
        bodyElement.style.backgroundColor = "#A1644B";
        bodyElement.style.color = "#C9D1D8";
        headerElement.style.backgroundColor = "#A83736";
        footerElement.style.backgroundColor = "#A83736";
        grid2.style.backgroundColor = "#A83736"; 
        grid5.style.backgroundColor = "#A83736"; 
        nav.style.backgroundColor = "#2b3b5f";
        theme = 0;
    }
}


let changeThemeButton = document.getElementById("change-theme-button"); 
if (changeThemeButton) { 
    changeThemeButton.addEventListener("click", adjustThemeColor);
}
