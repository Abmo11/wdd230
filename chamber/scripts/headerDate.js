// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("#headerDate");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `${fulldate}`;


//Banner for Tuesdays

const today = now.getDay();

if (today === 1 || today === 2) {
  document.querySelector('#monTueBanner').style.display = "block";
}
