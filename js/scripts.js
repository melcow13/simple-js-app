let pokemonList=[

  {name: "bulbasuar", height: 7, types: ["grass", "poison"]},
  {name: "pikachu", height: 4, types:["electric","mouse"]},
  {name: "charmander", height: 6, types: ["fire","lizard"]}

];

for (let i = 0; i < pokemonList.length; i++) {
  document.write ("Name: " + pokemonList[i].name + " \("+ "Height:" + pokemonList[i].height +"\)" +"<br>");
}
