
/**
 * Funcion que me permite  asignar las imagenes a cada carta en el html
 * @param {string} carta Ejemplo: 10H,KH,3D,AD
 * @param {number} turno turno del jugador Ejm: turno 2, 3, 4, el ultimo siempre es de la computadora
 * @param {HTMLElement} divCartas elemento html que me permite crear las imagenes en el html
*/

export const asignarImagenCarta = (carta,turno,divCartas) => {
    const imagenCarta = document.createElement('img');//Crea un elemento img de HTML
    imagenCarta.classList.add('carta');//Se le asgina la clase de las cartas
    imagenCarta.src = `assets/cartas/${carta}.png`;//Se le asigna la imagen
    divCartas[turno].append(imagenCarta); 
}
