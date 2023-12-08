import { renderCardPokemon } from "../component/renderCardPokemon/renderCardPokemon";

export async function fetchPokeApi(url,container) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const { results } = data;

    const pokeData = await Promise.all(
      results.map(async (poke) => {
        const pokeInfo = await (await fetch(poke.url)).json();

        return {
          id: pokeInfo.id,
          name: poke.name,
          abilities:pokeInfo.abilities ? pokeInfo.abilities.map((poke) => poke.ability.name) : [],
          img: pokeInfo.sprites.other["official-artwork"].front_default,
          types: pokeInfo.types ? pokeInfo.types.map(poke => poke.type.name) : [],
        };
      })
      );
      renderCardPokemon(container,pokeData);

   // console.log(pokeData);
  } catch (err) {
    console.log("Error : ", err.message);
  }
}
