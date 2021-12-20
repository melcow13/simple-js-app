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

  return {
    add: add,
    getAll: getAll
  };
})();



pokemonRepository.getAll().forEach(pokemon) => {
  document.write ("<br>" + pokemon.name + " \("+ "Height:" + pokemon.height +"\)");
  if (pokemon.height > 6)
  {
    document.write ('-it\'s big!');
  }
});
