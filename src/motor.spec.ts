import { vi, describe, it, expect, afterEach } from 'vitest';
import { mensajeEstado, obtenMensajeFinPartida, calculaPuntosCarta, dameCarta} from './motor';
import { Estado } from './model';

//No se porque tengo que importar "describe, it, expect", si en vite.config.ts ya he puesto "globals: true" en la configuracion de vitest, porque si no lo hago me da error de que no encuentra describe, it y expect.

describe ('mensajeEstado', () => {
    it("Deberia devolver Has sido muy conservador si saca menos de 5 ", () => {
        // Arrange
        const resultadoEsperado: Estado = "Has sido muy conservador";
        const texto : number = 4
        // Act
        const resultado = mensajeEstado(texto);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Deberia devolver Te ha entrado el canguelo eh? si saca menos de 6 ", () => {
        // Arrange
        const resultadoEsperado: Estado = "Te ha entrado el canguelo eh?";
        const texto : number = 5.5
        // Act
        const resultado = mensajeEstado(texto);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Deberia devolver Casi casi... si saca menos de la puntuacion maxima ", () => {
        // Arrange
        const resultadoEsperado: Estado = "Casi casi...";
        const texto : number = 7
        // Act
        const resultado = mensajeEstado(texto);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Deberia devolver ¡ Lo has clavado! ¡Enhorabuena! si gana la partida ", () => {
        // Arrange
        const resultadoEsperado: Estado = "¡ Lo has clavado! ¡Enhorabuena!";
        const texto : number = 7.5
        // Act
        const resultado = mensajeEstado(texto);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

});

describe ('obtenMensajeFinPartida', () => {
    it("Deberia devolver GAME OVER si pierde la partida ", () => {
        // Arrange
        const resultadoEsperado: string  = "GAME OVER";
        const texto : number = 8
        // Act
        const resultado = obtenMensajeFinPartida(texto);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Deberia devolver ¡ Lo has clavado! ¡Enhorabuena! si gana la partida ", () => {
        // Arrange
        const resultadoEsperado: string  = mensajeEstado(7.5);
        const texto : number = 7.5
        // Act
        const resultado = obtenMensajeFinPartida(texto);
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Deberia devolver cadena vacia si la partida sigue", () => {
    // Arrange
    const resultadoEsperado: string = "";
    const puntuacion: number = 7;
    // Act
    const resultado = obtenMensajeFinPartida(puntuacion);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
});


});




describe('dameCarta', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("Debería devolver 1 cuando Math.random devuelve 0", () => {
        // Arrange
        vi.spyOn(Math, 'random').mockReturnValue(0);
        const resultadoEsperado: number = 1;
        // Act
        const resultado = dameCarta();
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería devolver 7 cuando Math.random devuelve 0.65", () => {
        // Arrange
        vi.spyOn(Math, 'random').mockReturnValue(0.65);
        const resultadoEsperado: number = 7;
        // Act
        const resultado = dameCarta();
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería devolver 10 cuando Math.random devuelve 0.75", () => {
        // Arrange
        vi.spyOn(Math, 'random').mockReturnValue(0.75);
        const resultadoEsperado: number = 10;
        // Act
        const resultado = dameCarta();
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería devolver 11 cuando Math.random devuelve 0.85", () => {
        // Arrange
        vi.spyOn(Math, 'random').mockReturnValue(0.85);
        const resultadoEsperado: number = 11;
        // Act
        const resultado = dameCarta();
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería devolver 12 cuando Math.random devuelve 0.95", () => {
        // Arrange
        vi.spyOn(Math, 'random').mockReturnValue(0.95);
        const resultadoEsperado: number = 12;
        // Act
        const resultado = dameCarta();
        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});



describe('calculaPuntosCarta', () => {
    it('Deberia devolver el mismo valor si la carta es 1', () => {
        // Arrange
        const carta: number = 1;
        const resultadoEsperado: number = 1;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });
    
    it('Deberia devolver el mismo valor si la carta es 2', () => {
        // Arrange
        const carta: number = 2;
        const resultadoEsperado: number = 2;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

     it('Deberia devolver el mismo valor si la carta es 3', () => {
        // Arrange
        const carta: number = 3;
        const resultadoEsperado: number = 3;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

     it('Deberia devolver el mismo valor si la carta es 4', () => {
        // Arrange
        const carta: number = 4;
        const resultadoEsperado: number = 4;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

     it('Deberia devolver el mismo valor si la carta es 5', () => {
        // Arrange
        const carta: number = 5;
        const resultadoEsperado: number = 5;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

     it('Deberia devolver el mismo valor si la carta es 6', () => {
        // Arrange
        const carta: number = 6;
        const resultadoEsperado: number = 6;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

     it('Deberia devolver el mismo valor si la carta es 7', () => {
        // Arrange
        const carta: number = 7;
        const resultadoEsperado: number = 7;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

     it('Deberia devolver 0.5 si la carta es 10', () => {
        // Arrange
        const carta: number = 10;
        const resultadoEsperado: number = 0.5;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it('Deberia devolver 0.5 si la carta es 11', () => {
        // Arrange
        const carta: number = 11;
        const resultadoEsperado: number = 0.5;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it('Deberia devolver 0.5 si la carta es 12', () => {
        // Arrange
        const carta: number = 12;
        const resultadoEsperado: number = 0.5;
        //act
        const resultado = calculaPuntosCarta(carta);
        //assert
        expect(resultado).toBe(resultadoEsperado);
    });
});