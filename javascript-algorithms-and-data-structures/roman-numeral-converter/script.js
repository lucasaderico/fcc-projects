const form = document.getElementById("form");
const input = document.getElementById("number");
const output = document.getElementById("output");
const romanToDec = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = parseInt(input.value);

  if (isNaN(number)) {
    outputMessage(output, "display", "flex", "Please enter a valid number");
    return;
  }

  if (number > 0 && number < 4000) {
    const roman = converter(number);
    outputMessage(output, "display", "flex", roman);
    return;
  }

  if (number <= 0) {
    outputMessage(
      output,
      "display",
      "flex",
      "Please enter a number greater than or equal to 1",
    );
    return;
  }

  outputMessage(
    output,
    "display",
    "flex",
    "Please enter a number less than or equal to 3999",
  );
});

function converter(value) {
  const romanArr = Object.keys(romanToDec);
  const decimalArr = Object.values(romanToDec);
  let idx = 0;
  let arr = [];

  while (value > 0) {
    if (decimalArr[idx] > value) {
      idx++;
      continue;
    }

    value -= decimalArr[idx];
    arr.push(romanArr[idx]);
  }

  return arr.join("");
}

function outputMessage(element, property, value, message) {
  element.innerText = message;
  element.style[property] = value;
}
