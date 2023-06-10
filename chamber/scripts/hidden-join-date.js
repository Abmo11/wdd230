
function addHiddenDate() {
    //Creates a new Date object and pulls the current year in full 
    const newTime = new Date();

    //Goes to the document, gets the element with the "hiddenJoinDate" id, and inserts the value into the textarea
    document.getElementById("hiddenJoinDate").textContent = newTime;
}

//references submitBtn and assigs the function to the onclick event of the element
document.querySelector(".submitBtn").addEventListener("click", addHiddenDate);