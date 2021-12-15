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

for (let i = 0; i < pokemonList.length; i++) {
  document.write ("Name: " + pokemonList[i].name + " \("+ "Height:" + pokemonList[i].height +"\)" +"<br>");
}
