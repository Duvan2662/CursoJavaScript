
/**
* @returns {Promise<Object>} quote information
*/

const fetchQuote = async() => {
    const respuesta = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/1', )
    const data = await respuesta.json();
    console.log(data[0]);
    return data[0];
}




/**
 * 
 * @param {HTMLDivElement} element 
 * @param {HTMLDivElement} element2 
 */
export const BreakingBad = async(element,element2) => {

    element2.innerHTML = 'BrakingBad-app'
    element.innerHTML = 'Cargando los datos. . . . . . . .'; 
    //await fetchQuote();

    const frase = document.createElement('blockquote');
    const autor = document.createElement('h3');
    const boton = document.createElement('button');
    boton.innerText = 'Nueva Frase';
    
    const renderizarFrase = (data) => {
        frase.innerHTML = data.quote;
        autor.innerHTML = data.author;
        element.replaceChildren(frase,autor,boton);
    }

    boton.addEventListener('click',async() => {
        frase.innerHTML = 'Cargando los datos. . . . . . . .';
        autor.innerHTML = ''; 
        boton.disabled = true;
        const data = await fetchQuote();
        renderizarFrase(data);
        boton.disabled = false;
    })

    fetchQuote()
        .then(renderizarFrase)

}