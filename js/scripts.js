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

pokemonList.forEach((pokemon) => {
  document.write ("<br>" + pokemon.name + " \("+ "Height:" + pokemon.height +"\)");
  if (pokemon.height > 6)
  {
    document.write ('-it\'s big!');
  }
});
