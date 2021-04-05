import { general_fire } from './data.js';
import { general_grass } from './data.js';
import { general_water } from './data.js';
import { general_bug } from './data.js';
import { general_normal } from './data.js';
import { general_poison } from './data.js';
import { general_flying } from './data.js';
import { general_electric } from './data.js';
import { general_ground } from './data.js';
import { general_fighting } from './data.js';
import { general_psychic } from './data.js';
import { general_rock } from './data.js';
import { general_ghost } from './data.js';
import { general_dragon } from './data.js';
import { general_fairy } from './data.js';
import { general_dark } from './data.js';
import { general_steel } from './data.js';
import { general_ice } from './data.js';

import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const infoGeneral = data.pokemon;

const pokemon_container =document.getElementById("pokemon-container");
//const card =document.getElementById("card");

infoGeneral.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cards";
    pokemon_container.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePoke";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPoke";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="information";
    card_pokemon.appendChild(information_pokemon);
    const type1_pokemon =document.createElement("p");
    type1_pokemon.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon.className = "typesPoke";
    information_pokemon.appendChild(type1_pokemon);
    const type2_pokemon =document.createElement("p");
    type2_pokemon.textContent =poke.type[1];
    type2_pokemon.className = "typesPoke2";
    information_pokemon.appendChild(type2_pokemon);
    const atributes_pokemon_height =document.createElement("p");
    atributes_pokemon_height.textContent = "Altura : "+ poke.size.height;
    atributes_pokemon_height.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_height);
    const atributes_pokemon_weight =document.createElement("p");
    atributes_pokemon_weight.textContent ="Peso : "+ poke.size.weight;
    atributes_pokemon_weight.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_weight);
})

const pokemon_container_descendentes =document.getElementById("pokemon-container-descendentes");

let general_reverse =infoGeneral.reverse();

general_reverse.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cards";
    pokemon_container_descendentes.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePoke";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPoke";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="information";
    card_pokemon.appendChild(information_pokemon);
    const type1_pokemon =document.createElement("p");
    type1_pokemon.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon.className = "typesPoke";
    information_pokemon.appendChild(type1_pokemon);
    const type2_pokemon =document.createElement("p");
    type2_pokemon.textContent =poke.type[1];
    type2_pokemon.className = "typesPoke2";
    information_pokemon.appendChild(type2_pokemon);
    const atributes_pokemon_height =document.createElement("p");
    atributes_pokemon_height.textContent = "Altura : "+ poke.size.height;
    atributes_pokemon_height.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_height);
    const atributes_pokemon_weight =document.createElement("p");
    atributes_pokemon_weight.textContent ="Peso : "+ poke.size.weight;
    atributes_pokemon_weight.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_weight);
})

order_pokemon();

function order_pokemon (){

    let order_general = document.getElementById("order");
    order_general.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="grid";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="none";
    }
    let order_descendentes = document.getElementById("descendentes");
    order_descendentes.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="grid";
        document.querySelector(".allTypes").style.display="none";
    }

}

// funciones de filtro ----------------------------------------------------------

// funcion Pokemon tipo Acero
const pokemon_container_typeSteel =document.getElementById("pokemon-container-typeSteel");

const pokemon_steel =infoGeneral.filter(general_steel);
const steel_poke = pokemon_steel;

steel_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsSteel";
    pokemon_container_typeSteel.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeSteel";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeSteel";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationSteel";
    card_pokemon.appendChild(information_pokemon);
    const type1_pokemon =document.createElement("p");
    type1_pokemon.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon.className = "typesPoke";
    information_pokemon.appendChild(type1_pokemon);
    const type2_pokemon =document.createElement("p");
    type2_pokemon.textContent =poke.type[1];
    type2_pokemon.className = "typesPoke2";
    information_pokemon.appendChild(type2_pokemon);
    const atributes_pokemon_height =document.createElement("p");
    atributes_pokemon_height.textContent = "Altura : "+ poke.size.height;
    atributes_pokemon_height.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_height);
    const atributes_pokemon_weight =document.createElement("p");
    atributes_pokemon_weight.textContent ="Peso : "+ poke.size.weight;
    atributes_pokemon_weight.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_weight);
})

// funcion Pokemon tipo Acero
const pokemon_container_typeWater =document.getElementById("pokemon-container-typeWater");

const pokemon_water =infoGeneral.filter(general_water);
const water_poke = pokemon_water


water_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsWater";
    pokemon_container_typeWater.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeWater";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeWater";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationWater";
    card_pokemon.appendChild(information_pokemon);
    const type1_pokemon =document.createElement("p");
    type1_pokemon.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon.className = "typesPoke";
    information_pokemon.appendChild(type1_pokemon);
    const type2_pokemon =document.createElement("p");
    type2_pokemon.textContent =poke.type[1];
    type2_pokemon.className = "typesPoke2";
    information_pokemon.appendChild(type2_pokemon);
    const atributes_pokemon_height =document.createElement("p");
    atributes_pokemon_height.textContent = "Altura : "+ poke.size.height;
    atributes_pokemon_height.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_height);
    const atributes_pokemon_weight =document.createElement("p");
    atributes_pokemon_weight.textContent ="Peso : "+ poke.size.weight;
    atributes_pokemon_weight.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_weight);
})






// funcion Pokemon tipo Fire

const pokemon_container_typeFire =document.getElementById("pokemon-container-typeFire");

const pokemon_fire =infoGeneral.filter(general_fire);
const fire_poke = pokemon_fire;

fire_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsFire";
    pokemon_container_typeFire.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeFire";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeFire";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationFire";
    card_pokemon.appendChild(information_pokemon);
    const type1_pokemon =document.createElement("p");
    type1_pokemon.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon.className = "typesPoke";
    information_pokemon.appendChild(type1_pokemon);
    const type2_pokemon =document.createElement("p");
    type2_pokemon.textContent =poke.type[1];
    type2_pokemon.className = "typesPoke2";
    information_pokemon.appendChild(type2_pokemon);
    const atributes_pokemon_height =document.createElement("p");
    atributes_pokemon_height.textContent = "Altura : "+ poke.size.height;
    atributes_pokemon_height.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_height);
    const atributes_pokemon_weight =document.createElement("p");
    atributes_pokemon_weight.textContent ="Peso : "+ poke.size.weight;
    atributes_pokemon_weight.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_weight);
})






const pokemon_grass =infoGeneral.filter(general_grass);
//console.log(pokemon_grass)

const pokemon_bug =infoGeneral.filter(general_bug);
//console.log(pokemon_bug)

const pokemon_normal =infoGeneral.filter(general_normal);
//console.log(pokemon_normal)

const pokemon_poison =infoGeneral.filter(general_poison);
//console.log(pokemon_poison)

const pokemon_flying =infoGeneral.filter(general_flying);
//console.log(pokemon_flying)

const pokemon_electric =infoGeneral.filter(general_electric);
//console.log(pokemon_electric)

const pokemon_ground =infoGeneral.filter(general_ground);
//console.log(pokemon_ground)

const pokemon_fighting =infoGeneral.filter(general_fighting);
//console.log(pokemon_fighting)

const pokemon_psychic =infoGeneral.filter(general_psychic);
//console.log(pokemon_psychic)

const pokemon_rock =infoGeneral.filter(general_rock);
//console.log(pokemon_rock)

const pokemon_ghost =infoGeneral.filter(general_ghost);
//console.log(pokemon_ghost)

const pokemon_dragon =infoGeneral.filter(general_dragon);
//console.log(pokemon_dragon)

const pokemon_fairy =infoGeneral.filter(general_fairy);
//console.log(pokemon_fairy)

const pokemon_dark =infoGeneral.filter(general_dark);
//console.log(pokemon_dark)

const pokemon_ice =infoGeneral.filter(general_ice);
//console.log(pokemon_ice)



filter_types_pokemon ();

function filter_types_pokemon () {

    let filter_general = document.getElementById("todos");
    filter_general.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeSteel").style.display="grid";
        document.querySelector(".pokemon-container-typeWater").style.display="grid";
      
    }


}















pages ();

function pages () {

    let botonInicio = document.getElementById("btnInicio");
    botonInicio.onclick = function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="block"; 
        document.querySelector(".footer1").style.display="block"; 
        document.querySelector(".contentPokedex").style.display="none";
    }

    let mainHome = document.getElementById("home");
    mainHome.onclick = function(){
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="block"; 
        document.querySelector(".footer1").style.display="block"; 
        document.querySelector(".contentPokedex").style.display="none";
    }

    let mainPokedex = document.getElementById("pokedex");
    mainPokedex.onclick = function(){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".footer2").style.display="block"; 
    }

}
