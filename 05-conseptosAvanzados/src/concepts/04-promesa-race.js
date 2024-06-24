/**
* 
* @param {HTMLDivElement} element 
*/
export const promesaRaceComponent = ( element ) => {

    const renderValor = (valor) => {
        element.innerHTML = valor;
    }
    
    /*Sirve para saver cual promesa se dispara mas rapido */
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then(renderValor(valor))
    
}




// resolverPromesa forma abreviada
const slowPromise = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('slow resulta');
    },2000);
})

const mediumPromise = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('medium resulta');
    },1500);
})

const fastPromise = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('fast resulta');
    },1000);
})