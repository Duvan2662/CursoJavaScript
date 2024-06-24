import { heroes } from "../data/heroes";

/**
* 
* @param {HTMLDivElement} element 
*/
export const asyncAwaitComponent = async( element ) => {
    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    try {
        const heroe1 = await encontrarHeroes(id1);
        const heroe2 = await encontrarHeroes(id2);
        element.innerHTML = `${heroe1.name}-----${heroe2.name}`;
    } catch (error) {
        element.innerHTML = `${error}`;
    }
    
}



const encontrarHeroes = async(id) => {
    const heroe = heroes.find(heroe=> heroe.id === id); 
    if(!heroe){
        throw `Heroe con el id ${id} no fue encontrado`;
    }
    
    return heroe;
}