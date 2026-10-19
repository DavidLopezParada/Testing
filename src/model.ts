export interface Partida {
    puntuacion: number;
}

 export const crearPartidaInicial = (): Partida => ({ puntuacion: 0 });

export const partida: Partida = crearPartidaInicial();

export const PUNTUACION_MAXIMA: number = 7.5;

export type Estado =
| "Has sido muy conservador"
| "Te ha entrado el canguelo eh?"
| "Casi casi..."
| "¡ Lo has clavado! ¡Enhorabuena!"