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
    button.classList.add("btn");
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
      item.weight= details.weight;
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
    let modalBody = $(".modal-body");
    let modalTitle= $('#exampleModalLabel');

    modalBody.empty();
    modalTitle.empty();
    let nameElement = $("<h1>"+ pokemon.name + "</h1>");
    let weightElement = $("<p>" + "Weight:" + pokemon.weight + "</p>");
    let heightElement = $("<p>"+ "Height:" + pokemon.height +"</p>");
    let imageElement = $('<img class="modal-image" style="width:50%">');
    imageElement.attr("src", pokemon.imageUrl);

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(weightElement);
    modalBody.append(heightElement);
    modalBody.append($("<h5>Type:</h5>"));
    pokemon.types?.forEach(type=>{
    modalBody.append($("<p>" + type?.type?.name + "</p>"));
    })

    $('#pokedex').modal();

    };



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
