const temp = document.getElementById("temp").innerText;
const speed = document.getElementById("speed").innerText;

if (temp <= 50 && speed > 3) {
    // Code to execute if both conditions are true
    const chillin = 35.74 + (0.6215*temp) - (35.75*(speed**0.16)) + (0.4275*temp*(speed**0.16));

    document.getElementById("chill").innerText = chillin.toFixed(2);

  } else {
    // Code to execute if at least one condition is false
    document.getElementById("chill").innerText = "N/A";
  }