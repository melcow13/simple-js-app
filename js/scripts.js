(function() {

  let pokemonList=[
    {
      name: "Bulbasuar",
      height: 7,
      types: ["grass", "poison"]
    },
    {
      name: "Pikachu",
      height: 4,
      types:["electric","mouse"]
    },
    {
      name: "Charmander",
      height: 6,
      types: ["fire","lizard"]}

  ];

}());

let pokemonRepository = (function () {
  let pokemonList=[
    {
      name: "Bulbasuar",
      height: 7,
      types: ["grass", "poison"]
    },
    {
      name: "Pikachu",
      height: 4,
      types:["electric","mouse"]
    },
    {
      name: "Charmander",
      height: 6,
      types: ["fire","lizard"]}
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  };

  return {
    add: add,
    getAll: getAll
    getAll: getAll,
    addListItem: addListItem
  };
})();



pokemonRepository.getAll().forEach((pokemon) => {
  document.write ("<br>" + pokemon.name + " \("+ "Height:" + pokemon.height +"\)");
  if (pokemon.height > 6)
  {
    document.write ('-it\'s big!');
  }
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
