const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  const favRead = input.value.trim(); //Trims leading and trailing
  input.focus();

  if (favRead !== "") {
    const item = document.createElement("li");
    const button = document.createElement("button");

    // Add an attribute to the button for readability 
    button.setAttribute("aria-label", "Delete list item");

    item.textContent = favRead;
    button.textContent = "❌";

    item.appendChild(button);

    list.appendChild(item);

    button.addEventListener("click", () => {
      list.removeChild(item);
      input.focus();
    });
    input.value = "";
  }
});
