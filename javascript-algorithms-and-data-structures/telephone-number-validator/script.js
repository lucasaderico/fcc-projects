const form = document.querySelector("form");
const input = document.querySelector("#user-input");
const clear = document.querySelector("#clear-btn");
const results = document.querySelector("#results-div");

function checkSubmit(e) {
  e.preventDefault();
  const value = input.value;
  if (value === "") {
    alert("Please provide a phone number");
    return;
  }

  results.style.display = "flex";

  if (phoneNumberValidator(value)) {
    results.appendChild(createParagraph("Valid US number", value));
    results.scrollTop = results.scrollHeight;
    return;
  }

  results.appendChild(createParagraph("Invalid US number", value));
  results.scrollTop = results.scrollHeight;
}

function phoneNumberValidator(value) {
  const regex = /^1?\s?\(?[0-9]{3}\)?[-\s]?[0-9]{3}[-\s]?[-\s]?[0-9]{4}$/;
  const openParentheses = /\(/;
  const closeParentheses = /\)/;
  const openClose = /\([0-9]{3}\)/;

  if (openParentheses.test(value) || closeParentheses.test(value)) {
    return openClose.test(value) && regex.test(value);
  }

  return regex.test(value);
}

function createParagraph(text, value) {
  const p = document.createElement("p");
  p.innerText = `${text}: ${value}`;
  return p;
}

clear.addEventListener("click", () => (results.innerHTML = ""));

form.addEventListener("submit", checkSubmit);
