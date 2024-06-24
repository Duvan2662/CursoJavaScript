import { heroes } from "../data/heroes";


/**
* 
* @param {HTMLDivElement} element 
*/
export const promesaComponent = ( element ) => {

    const renderHeroe = (hero) => {
        element.innerHTML = hero.name;
    }
    
    
    const render2Heroe = (hero1, hero2) => {
        element.innerHTML = `${hero1.name}-----${hero2.name}`;
    }

    const renderError = (error) => {
        element.innerHTML = error;
    }


    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    /*Manejo de promesas dentro de promesas forma1 */

    // encontrarHeroe(id1)
    //     .then(  (heroe1)  =>  {
    //         encontrarHeroe(id2)
    //             .then(heroe2 => {
    //                 render2Heroe(heroe1,heroe2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);

    /*Manejo de promesas  forma 2*/
    // let heroe1
    // encontrarHeroe(id1)
    //     .then(heroe => {
    //         heroe1 = heroe;
    //         return encontrarHeroe(id2);
    //     }).then(heroe2 => {
    //         render2Heroe(heroe1,heroe2)
    //     })
    //     .catch(renderError);


    /*Manejo de promesas cuando ninguna de las promesas depende de la otra 
    Si alguna de las promesas depende de otra utiliza la forma 2 */

    Promise.all([
        encontrarHeroe(id1),
        encontrarHeroe(id2),
    ])
    .then(([hero1,hero2])=> render2Heroe(hero1,hero2))
    .catch(renderError);

}


/**
* 
* @param {string} id 
* @returns  {Promise}
*/
const encontrarHeroe = (id) =>{

    return new Promise((resolve, reject) => {
        const heroe = heroes.find(heroe =>heroe.id === id);

        if (heroe) {
            resolve (heroe);
            return
        }
        reject(`El heroe con el id ${id} no fue encontrado`);
        
    }) 

}