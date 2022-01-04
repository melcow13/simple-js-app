let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listPokemon = document.createElement("li");
    $(".list-group").addClass("list-unstyled");
    $("li").addClass("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    //button actions
    button.classList.add("btn-outline-info");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    //Events
    button.addEventListener("click", () => {
      pokemonRepository.showDetails(pokemon);
      pokemonRepository.showModal(pokemon);
    });
  };

  function loadList() {
    return fetch(apiUrl).then(function(response){
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item){
        let pokemon={
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e){
      console.error(e);
    })
  };

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };

})();


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
