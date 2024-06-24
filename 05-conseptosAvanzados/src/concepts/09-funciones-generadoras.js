/**
* 
* @param {HTMLDivElement} element 
*/
export const funcionesGeneradorasComponent = ( element1, element2 ) => {


    // const resultadoFuncionGeneradora = miPrimeraFuncionGeneradora();
    // console.log(resultadoFuncionGeneradora.next());

    const genId = idGenerador();



    const boton = document.createElement('button');
    boton.innerText = 'Click aqui';
    element1.append (boton);

    const renderBoton = () => {
        const  valor  = genId.next();
        element2.innerHTML = `
            ${valor.value}
        `; 
    }

    boton.addEventListener('click', renderBoton);


}

function* idGenerador() {
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
    
}


function* miPrimeraFuncionGeneradora() {

    yield 'Primer valor'; 
    yield 'Segundo valor'; 
    yield 'Tercer valor'; 
    yield 'Cuarto valor';

    return 'Ya no ahi valores';
    yield 'Ya no se puede hacer nada';

    
}