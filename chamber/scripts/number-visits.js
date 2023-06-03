let visits = document.querySelector("#numberVisits");

/* milliseconds to 24 hrs */
const milsToDays = 86400000;

/* Get timestamp */
let dateNow = Date.now();

let time = 0;

// Get stored VALUE for visitBetween in the numVisits-ls KEY in localStorage if it exists. 
// If missing, then assign dateNow to the visitBetween variable.
let visitBetween = Number(window.localStorage.getItem("timeBetween-ls")) || dateNow;

// Determine if this is the first visit or display the number of days between visits
if (visitBetween == dateNow) {
    visits.textContent = `This is your first visit. 🥳 Welcome!`;
} else {
    time = Math.floor((dateNow - visitBetween) / milsToDays);
    visits.textContent = `It's been ${Math.abs(time)} days since your last visit`;
}

// Store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("timeBetween-ls", dateNow);
