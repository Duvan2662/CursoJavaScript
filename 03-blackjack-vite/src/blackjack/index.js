import _ from 'underscore';

import {tomarCarta,acumularPuntos,asignarImagenCarta,turnoComputadora,crearJuego} from "../casos-uso/index";
// import { crearBaraja AS funcionBarajar} from '../casos-uso/crear-baraja'; //a las importanciones se les puede colocar un alias s

const modulo = ( () =>{
  'use strict'

  let baraja            = [],
      puntosJugadores   = [];

  //Referencias del DOM
  const btnpedir          = document.querySelector('#btnPedir'),
        btndetener        = document.querySelector('#btnDetener'),
        btnuevo           = document.querySelector('#btnNuevo'),
        actualizarPuntos  = document.querySelectorAll('small'),
        divCartas         = document.querySelectorAll('.divCartas');
  


  //Eventos de pedir
  btnpedir.addEventListener('click', () => {

      const carta = tomarCarta(baraja);//Cuando se de click se toma una carta
      const puntosJugador = acumularPuntos(carta,0,puntosJugadores,actualizarPuntos);
      asignarImagenCarta(carta,0,divCartas);
              
      if(puntosJugador > 21){
          console.error('PERDISTE');
          btnpedir.disabled = true;//bloque el boton pedir
          btndetener.disabled = true;//bloque el boton detener
          turnoComputadora(puntosJugador,baraja,puntosJugadores,actualizarPuntos,divCartas);//Funcion para que juege la computadora 
      }else if(puntosJugador === 21){
          console.warn('LLEGASTE A 21 GENIAL !!!!!!1');
          btnpedir.disabled = true;//bloque el boton pedir
          btndetener.disabled = true;//bloque el boton detener
          turnoComputadora(puntosJugador,baraja,puntosJugadores,actualizarPuntos,divCartas);//Funcion para que juege la computadora 
      }
      
  })


  //Evento de detener
  btndetener.addEventListener('click', ()=> {
      btnpedir.disabled = true;//bloque el boton pedir
      btndetener.disabled = true;//bloque el boton detener
      turnoComputadora(puntosJugadores[0],baraja,puntosJugadores,actualizarPuntos,divCartas);//Funcion para que juege la computadora 
  })


  //Evento nuevo juego 
  btnuevo.addEventListener('click', ()=>{
      const recibe = crearJuego(2,baraja,puntosJugadores,actualizarPuntos,divCartas,btnpedir,btndetener);
      baraja = recibe.bara;
      puntosJugadores = recibe.puntosJu;
  })

  
  //retorna el juego para volver a jugar;
  return {
      nuevoJuego : crearJuego
   }
} )();










