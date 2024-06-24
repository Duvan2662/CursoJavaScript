import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    /*if*/
    // if(await getHeroAsync(id1)){
    //     element.innerHTML = `
    //         Si existe el heroe</br>
    //     `;
    //     return
    // }

    // element.innerHTML = `
    //     No existe el heroe</br>
    // `;

    /*for*/

    const arregloHeroes = heroes.map(heroe => heroe.id)
    const arregloPromesasHeroes = getHeroesAsync(arregloHeroes);

    for await (const heroe of arregloPromesasHeroes ){
        element.innerHTML += `
            ${heroe.name} <br/>
        `; 
    }



}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}