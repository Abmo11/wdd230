// toggles a Class to open hidden menu -
// overwritten in large view ID - Class and ID specificity
function toggleMenu() {
  document.getElementById("navOne").classList.toggle("open");
  // toggles hamburger and X
  document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger");
x.onclick = toggleMenu;

window.onresize = () => {
  if (window.innerWidth > 1024) navOne.classList.remove("open");
};

window.onresize = () => {
  if (window.innerWidth > 1023) {
    navOne.classList.remove("open");
    hamburger.classList.remove("open");
  }
};
