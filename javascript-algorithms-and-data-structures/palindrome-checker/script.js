const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromeChecker = (str) => {
  return (
    str.replace(/\W|_/g, "").toLowerCase() ===
    str.replace(/\W|_/g, "").split("").reverse().join("").toLowerCase()
  );
};

const checkBtn = () => {
  let str = input.value;

  if (str === "") {
    return alert("Please input a value");
  }

  if (palindromeChecker(str)) {
    result.innerHTML = `
      <span class="result">${str}</span> is a palindrome
    `;
    result.style.display = "block";
    input.value = "";
    return;
  }

  result.innerHTML = `
    <span class="result">${str}</span> is not a palindrome
  `;
  result.style.display = "block";
  input.value = "";
};

button.addEventListener("click", checkBtn);
