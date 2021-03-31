import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

const infoGeneral = data.pokemon;


// eslint-disable-next-line no-console
//console.log(example,data);


//console.log("data: ",data)

//console.log("data.pokemon: ",data.pokemon)

//console.log("data.pokemon[0]: ",data.pokemon[0])

//console.log("data.pokemon[0].name: ",data.pokemon[0].name)


//const general= [data.pokemon];
//for (let i = 0; i < general.length; i++){
//  console.log(general[i]);
//}


//let tipo = [];

//for (let i = 0; i < infoPokemon.length; i++){
//    var pokemontype = infoPokemon [i];
//   if () {
//      tipo.push(pokemontype)
//    }
//}
    
const pokemon_container =document.getElementById("pokemon-container");
const card =document.getElementById("card");

infoGeneral.forEach (poke => {
    const fig = document.createElement("h4");
    fig.textContent = poke.name;
    card.appendChild(fig);
    var Image= document.createElement("img");
    Image.src=poke.img;
    card.appendChild(Image);
    const numero = document.createElement("p");
    numero.textContent = poke.num;
    card.appendChild(numero);
    const Type1 =document.createElement("p");
    Type1.textContent = poke.type[0];
    card.appendChild(Type1);
    const Type2 =document.createElement("p");
    Type2.textContent = poke.type[1];
    card.appendChild(Type2);
})

//const pokeName =[]
//data.pokemon.forEach(poke =>{
//pokeName.push(poke.name)

//})
//console.log(pokeName)

//const pokeNum = []
//data.pokemon.forEach(poke =>{
//    pokeNum.push(poke.num)    
//})
//console.log(pokeNum)

//const pokeImg = []
//data.pokemon.forEach(poke =>{
//    pokeImg.push(poke.img)
//})
//console.log(pokeImg)

//const poketype1 = []
//data.pokemon.forEach(poke =>{
//    poketype1.push(poke.type[0])
//})
//console.log(poketype1)

//const poketype2 = []
//data.pokemon.forEach(poke =>{
//    poketype2.push(poke.type[1])
//})
//console.log(poketype2)



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


//generalpoke();
//function generalpoke() {
//    const pokemon_container =document.getElementById("pokemon-container");
//    const poke_name = document.querySelector(".poke_name");
//}




//for (let i = 0; i < infoGeneral.length; i++){
//    let pokeName = infoGeneral[i].name;
//    let pokeNum = infoGeneral[i].num;
//    let pokeImg = infoGeneral[i].img;
//    let poketype1 = infoGeneral[i].type[0];
//    let poketype2 = infoGeneral[i].type[1];

//}
