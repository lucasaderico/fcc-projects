const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImg = document.getElementById("sprite");
const pokemonTypes = document.getElementById("types");

const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

searchButton.addEventListener("click", () => {
  const value = searchInput.value;
  if (value === "") return;

  searchPokemon(`${url}/${stringFormat(value)}`);
});

async function searchPokemon(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    buildDesc(data);
    buildStats(data);
  } catch (err) {
    alert("Pokémon not found");
  }
}

function stringFormat(str) {
  const gender = ["♀", "♂"];
  const genderObj = { 0: " f", 1: " m" };
  let test = false;
  let idx = 0;
  for (let i = 0; i < gender.length; ++i) {
    if (str.includes(gender[i])) {
      test = true;
      idx = i;
    }
  }

  if (test) {
    str = str.replace(gender[idx], genderObj[idx]);
  }

  let newStr = str.split(" ");

  for (let i = 0; i < newStr.length; ++i) {
    newStr[i] = newStr[i].replace(/\W|_/g, "").toLowerCase();
  }

  return newStr.join("-");
}

function buildDesc(obj) {
  const { name, id, weight, height, sprites, types } = obj;
  pokemonName.textContent = name;
  pokemonId.textContent = `#${id}`;
  pokemonWeight.textContent = weight;
  pokemonHeight.textContent = height;
  pokemonImg.src = sprites.front_default;
  pokemonTypes.innerHTML = "";

  for (let i = 0; i < types.length; ++i) {
    pokemonTypes.innerHTML += `
      <div>${types[i].type.name.toUpperCase()}</div>
    `;
  }

  document.querySelector(".desc").style.visibility = "visible";
}

function buildStats(data) {
  const stats = data.stats;
  for (let i = 0; i < stats.length; ++i) {
    document.getElementById(`${stats[i].stat.name}`).textContent =
      stats[i].base_stat;
  }
}
