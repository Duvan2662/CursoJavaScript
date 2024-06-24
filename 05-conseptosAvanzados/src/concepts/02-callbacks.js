import { heroes } from "../data/heroes";
/**
* 
* @param {HTMLDivElement} element 
*/
export const callbacksComponent = ( element ) => {

    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371f25a058e5b1c8a65e';

    encontrarHeroe(id1, (error,heroe) => {
        if (error) {
            element.innerHTML = error;
            return;
        }

        encontrarHeroe(id2, (error,heroe2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${heroe.name} / ${heroe2.name}`;
        })
    });

}


/**
* 
* @param {string} id 
* @param {(error : string|null, hero:Object) => void} callback 
*/
const  encontrarHeroe = (id, callback) => {

    const hero = heroes.find(heroe => heroe.id === id);  
    if (!hero) {
        callback(`El heroe con el ID ${id} no se encontro`);
        return;
    }


    
    callback(null, hero);

}