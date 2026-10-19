import {
 botonPideCarta, botonPlantarse, botonNuevaPartida, botonHabriaPasado, iniciarPartida, pideCarta, plantarse, unaNuevaPartida, queHabriaPasado,
} from './ui';



if (botonPideCarta !== null && botonPideCarta !== undefined && botonPideCarta instanceof HTMLButtonElement) {
  botonPideCarta.addEventListener('click', () => { pideCarta(); });
}



if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener('click', () => { plantarse(); });
}





if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener('click', () => { unaNuevaPartida();});
}





if (botonHabriaPasado !== null && botonHabriaPasado !== undefined && botonHabriaPasado instanceof HTMLButtonElement) {
  botonHabriaPasado.addEventListener('click', () => { queHabriaPasado(); });
}



document.addEventListener("DOMContentLoaded", iniciarPartida);