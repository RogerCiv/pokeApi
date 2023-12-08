import { fetchPokeApi } from './src/helper/fetchPokeApi';
import { findPokemon } from './src/helper/findPokemon';
import './style.css'


const app = document.getElementById('app');
const cards = document.querySelector(".row")

const inputSearch = document.getElementById('inputSearch')
const btnSearch = document.getElementById('btnSearch');

const pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

fetchPokeApi(pokeURL,cards)


btnSearch.addEventListener("click", (e) => {
  e.preventDefault()
  
  findPokemon(inputSearch.value,cards)
})


