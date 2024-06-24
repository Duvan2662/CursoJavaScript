/**
* 
* @param {HTMLDivElement} element 
*/
export const asyncAwait2Component = async( element ) => {

    console.time('Start');

    /*Manera lenta se utilia cuando una promesa depende de la otra o necesita datos de la otra promesa  
    */
    // const valor1 = await slowPromise();
    // const valor2 = await mediumPromise();
    // const valor3 = await fastPromise();

    // element.innerHTML = `
    //     Valor 1 ${valor1}, </br>
    //     Valor 2 ${valor2}, </br> 
    //     Valor 3 ${valor3}, </br> 
    // `;

    /*Manera rapida solo se utiliza si una promesa no depende de la otra  por que las promesas se disparan de manera simultanea*/

    const [valor1,valor2,valor3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);
    element.innerHTML = `
        Valor 1 ${valor1}, </br>
        Valor 2 ${valor2}, </br> 
        Valor 3 ${valor3}, </br> 
    `;

    console.timeEnd('Start');


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