import { partida, PUNTUACION_MAXIMA } from './model';
import { calculaPuntosCarta, obtenMensajeFinPartida, sumaPuntos, nuevaPartida, dameCarta, mensajeEstado, simulaQueHabriaPasado } from './motor';

const numeroPuntuacion = document.querySelector('.numero-puntuacion') as HTMLElement;

export function muestraPuntuacion(puntos: number):void {
 if (numeroPuntuacion !== null && numeroPuntuacion !== undefined && numeroPuntuacion instanceof HTMLElement) {
    numeroPuntuacion.textContent = puntos.toString().padStart(2, '0');
    } 
}


export const botonPideCarta = document.querySelector<HTMLButtonElement>('#boton-puntuacion');

const cartaElement = document.querySelector<HTMLImageElement>('#back-card');


const carta1 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
const carta2 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
const carta3 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
const carta4 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
const carta5 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
const carta6 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
const carta7 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
const cartasota = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
const cartacaballo = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
const cartarey = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
const cartaBocaAbajo = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"


function obtenCartaUrl(carta: number): string {
  switch (carta) {
    case 1:
      return carta1;
    case 2:
      return carta2;
    case 3:
      return carta3;
    case 4:
      return carta4;
    case 5:
      return carta5;
    case 6:
      return carta6;
    case 7:
      return carta7;
    case 10:
      return cartasota;
    case 11:
      return cartacaballo;
    case 12:
      return cartarey;
    default:
      return "";
  }
}


function pintaCartaEnHtml(url: string): void {
  if (cartaElement !== null && cartaElement !== undefined && cartaElement instanceof HTMLImageElement) {
    cartaElement.src = url;
  }
}


export function mostrarCarta(carta: number): void {
  pintaCartaEnHtml(obtenCartaUrl(carta));
}






export function actualizarPuntuacion(carta: number): void {
  const puntosCarta = calculaPuntosCarta(carta);
  partida.puntuacion = sumaPuntos(partida.puntuacion, puntosCarta);
  muestraPuntuacion(partida.puntuacion);

  const mensaje = obtenMensajeFinPartida(partida.puntuacion);
  muestraMensaje(mensaje);
  gestionarFinPartida(partida.puntuacion);
}






export function cambiarEstadoBoton(boton: HTMLButtonElement | null, deshabilitado: boolean): void {
  if (boton) {
    boton.disabled = deshabilitado;
  }
}




const gestionarFinPartida : (puntuacion: number) => void = (puntuacion) => {
  if (puntuacion >= PUNTUACION_MAXIMA) {
    desactivarBotones();
  }
}

const mensajeElement = document.querySelector('.mensaje-resultado') as HTMLElement;

export function muestraMensaje(mensaje: string): void {
  if (mensajeElement !== null && mensajeElement !== undefined && mensajeElement instanceof HTMLElement) {
    mensajeElement.textContent = mensaje;
  }
}



export const botonPlantarse = document.querySelector<HTMLButtonElement>('#boton-plantarse');




 export const desactivarBotones = (): void => {
  cambiarEstadoBoton(botonPlantarse, true);
  cambiarEstadoBoton(botonPideCarta, true);
}

export const botonNuevaPartida = document.querySelector<HTMLButtonElement>('#nueva-partida');

export function iniciarPartida(): void {
  nuevaPartida();
  muestraPuntuacion(partida.puntuacion);
  muestraMensaje("");

  pintaCartaEnHtml(cartaBocaAbajo);
  cambiarEstadoBoton(botonHabriaPasado, true);
}

export const activarBotones = (): void => {
  cambiarEstadoBoton(botonPlantarse, false);
  cambiarEstadoBoton(botonPideCarta, false);
}




export const botonHabriaPasado = document.querySelector<HTMLButtonElement>('#boton-habria-pasado');



export const pideCarta = () => {
 const carta = dameCarta();
 mostrarCarta(carta);
 actualizarPuntuacion(carta);
}

export const plantarse = () => {
  const estado = mensajeEstado(partida.puntuacion);
      muestraMensaje(estado);
      desactivarBotones();
      cambiarEstadoBoton(botonHabriaPasado, false);
}

export const unaNuevaPartida = () => {
  iniciarPartida();
  activarBotones();
}

export const queHabriaPasado = () => {
   const resultado = simulaQueHabriaPasado();
      muestraMensaje(resultado);
      cambiarEstadoBoton(botonHabriaPasado, true);
}