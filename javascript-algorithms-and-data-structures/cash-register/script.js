let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cidElement = document.querySelector("#cash-register ul");
const total = (document.querySelector("#total").textContent = `$${price}`);
const cash = document.querySelector("#cash");
const purchaseBtn = document.querySelector("#purchase-btn");
const changeDue = document.querySelector("#change-due");
const drawerStatus = document.querySelector("#status");
const changeList = document.querySelector("#change-list");

purchaseBtn.addEventListener("click", () => {
  const value = parseFloat(cash.value);
  let change = value - price;

  if (!value) {
    return;
  }

  if (noChange(change)) return;

  const { status, change: changeArr } = checkCashRegister(price, value, cid);
  createChangeList(status, changeArr);
  cash.value = "";
});

function noChange(change) {
  if (change === 0) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    changeDue.style.display = "block";
    changeDue.classList.add("zero");
    return true;
  }

  if (change < 0) {
    alert("Customer does not have enough money to purchase the item");
    return true;
  }
}

function checkCashRegister(price, cash, cid) {
  let obj = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let change = cash - price;
  const keys = cid.map((e) => e[0]);
  let idx = getIdx(obj, change);

  let changeArr = [];

  while (change > 0 && idx >= 0) {
    let currValue = obj[keys[idx]];

    if (currValue <= change && cid[idx][1] >= currValue) {
      changeArr.push(keys[idx]);
      change = (change - currValue).toFixed(2);
      cid[idx][1] = parseFloat((cid[idx][1] - currValue).toFixed(2));
    }

    if (currValue > change || cid[idx][1] < currValue) {
      idx -= 1;
    }
  }

  if (change > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  let formattedArr = buildArr(obj, changeArr);
  let closeDrawer = cid.every((elem) => elem[1] === 0);

  let newObj = {};

  for (let num of cid) {
    newObj[num[0]] = num[1];
  }

  for (let i of formattedArr) {
    newObj[i[0]] = i[1];
  }

  let closedKeys = Object.keys(newObj);
  let closedValues = Object.values(newObj);

  let closedArr = [];

  for (let i = 0; i < closedValues.length; ++i) {
    closedArr.push([closedKeys[i], closedValues[i]]);
  }

  if (closeDrawer) {
    return { status: "CLOSED", change: formattedArr };
  }

  return { status: "OPEN", change: formattedArr };
}

function getIdx(obj, num) {
  const keys = Object.keys(obj);
  let idx = keys.length;

  for (let i = 0; i < keys.length; ++i) {
    if (obj[keys[i]] > num) {
      idx = i;
      break;
    }
  }
  return --idx;
}

function buildArr(obj, arr) {
  let newObj = {};
  let formattedArr = [];

  for (let i of arr) {
    newObj[i] = newObj[i] ? newObj[i] + 1 : 1;
  }

  for (let j in newObj) {
    formattedArr.push([j, newObj[j] * obj[j]]);
  }

  return formattedArr;
}

function createChangeList(status, list) {
  changeDue.innerHTML = `<h3>Status: <span>${status}</span></h3>`;
  changeDue.innerHTML += list.map((e) => `<p>${e[0]}: $${e[1]}</p>`).join("");
  changeDue.style.display = "block";
}

function start(arr, parent) {
  cidElement.innerHTML = "";

  arr.forEach((elem) => {
    const li = document.createElement("li");
    li.innerHTML = `${elem[0]}: <span class="cid">$${elem[1]}</span>`;
    parent.appendChild(li);
  });
}

start(cid, cidElement);
