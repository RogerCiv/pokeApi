// En tu findPokemon.js


export function findPokemon(searchTerm, container) {
   console.log(container);
  const cardsArray = Array.from(container.children);
    console.log(cardsArray);
  //console.log(searchTerm);
  cardsArray.map((card) => {
    const cardName = card.querySelector('.poke-name').textContent.toLowerCase();
   // console.log(cardName);
    if (cardName.includes(searchTerm.toLowerCase())) {
     //   console.log("Existe");
      card.classList.remove('hidden'); // Muestra la tarjeta si coincide
    } else {
      //  console.log("NO existe");
      card.classList.add('hidden'); // Oculta la tarjeta si no coincide
    }
  });

}
