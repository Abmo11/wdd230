function toggleMenu() {
  document.getElementById("navOne").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;