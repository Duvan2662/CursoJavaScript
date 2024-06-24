import { heroes } from "../data/heroes";

/**
* 
* @param {HTMLDivElement} element 
*/
export const asyncComponent = ( element ) => {

    const idHeroe = '5d86371f25a058e5b1c8a65e';

    encontrarHeroes(idHeroe)
        .then(name => element.innerHTML = name)
        .catch(error =>element.innerHTML = error)
}




/**
* 
* @param {string} id  
* @returns {Promise<string>}
*/

/*async me ayuda a convertir una funcion en una promesa o una funcion asincrona 
Estas funciones se ejecutan despues de ejecutar el codigo que no es asincrono*/
const encontrarHeroes = async(id) => {
    const heroe = heroes.find(heroe=> heroe.id === id); 
    if(!heroe){
        throw `Heroe con el id ${id} no fue encontrado`;
    }
    
    return heroe?.name;
}