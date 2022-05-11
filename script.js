// button
document.querySelector("#search").addEventListener("click", getPokeMon);

//transform string in to all lowercase letter
function lowerCaseName(string) {
  return string.toLowerCase();
}
// Captallize First letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fetch data
function getPokeMon(event) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `<div>
      <img
        src="${data.sprites.other["official-artwork"].front_default}"
        alt=${capitalizeFirstLetter(data.name)}
      />
    </div>
    <div class="pokemonInfo">
      <h1>${capitalizeFirstLetter(data.name)}</h1>
      <p>Wight: ${data.weight}</p>
    </div>`;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
}
