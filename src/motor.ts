import { Estado, partida, PUNTUACION_MAXIMA, crearPartidaInicial } from './model';


function generarNumeroAleatorio(): number {
  return Math.floor(Math.random() * 10 + 1);
}

function ajustaValorCarta(numero: number): number {
  return numero > 7 ? numero + 2 : numero;
}

export function dameCarta(): number {
  const numero = generarNumeroAleatorio();
  return ajustaValorCarta(numero);
}




export function calculaPuntosCarta(carta: number): number {
  return carta > 7 ? 0.5 : carta;
}

export function sumaPuntos(actual: number, nuevos: number): number {
  return actual + nuevos;
}




const haSuperadoPuntuacionMaxima = (puntos: number): boolean => puntos > PUNTUACION_MAXIMA;


export function mensajeEstado(puntuacion: number): Estado {
   if (puntuacion < 5) {
    return "Has sido muy conservador";
  } else if (puntuacion < 6) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntuacion < PUNTUACION_MAXIMA) {
    return "Casi casi...";
  } else {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  }
}


export function simulaQueHabriaPasado(): string {
  const cartaSimulada = dameCarta();
  const puntosSimulados = sumaPuntos(partida.puntuacion, calculaPuntosCarta(cartaSimulada));
  const veredicto = haSuperadoPuntuacionMaxima(puntosSimulados)
    ? "te habrías pasado con"
    : "te habrías quedado en";

  return `Habrías sacado un ${cartaSimulada} y ${veredicto} ${puntosSimulados} puntos.`;
}


export const obtenMensajeFinPartida = (puntuacion: number): string => {
  if (haSuperadoPuntuacionMaxima(puntuacion)) {
    return "GAME OVER";
  }
  if (puntuacion === PUNTUACION_MAXIMA) {
    return mensajeEstado(puntuacion);
  }
  return "";
};


 export const nuevaPartida = (): void => {
     Object.assign(partida, crearPartidaInicial());
   };