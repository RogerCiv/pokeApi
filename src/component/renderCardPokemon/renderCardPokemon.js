export function renderCardPokemon(container, pokeData) {
  console.log(pokeData);

  pokeData.forEach((poke) => {
    let types = poke.types.map((type) => `<p class="${type} type">${type}</p>`).join("")
  
    let abilities = poke.abilities.map(ability => `<li class="list-group-item ${ability} ability">${ability}</li>`).join("")

    container.innerHTML += `
              <div class="col-md-6">
  
              <div class="card mb-3" data-id="${poke.id}">
              <h3 class="card-header">Pokémon Gotta catch 'em all!</h3>
              <div class="card-body">
              <h5 class="card-title">Type</h5>
              <h6 class="card-subtitle  types">${types}</h6>
              </div>
              <div>
              <img src="${poke.img}" class="" width="200px" alt="Imagen ${poke.name}">
              </div>
              
              <h3 class="poke-name">${poke.name}</h3>
              <ul class="list-group list-group-flush">
              ${abilities}
              </ul>
     
              <div class="card-footer text-muted">
              <span class="text-info"> ID: ${poke.id}</span>
              </div>
              </div>
              </div>
              </div>
              
              `;
  });
}
