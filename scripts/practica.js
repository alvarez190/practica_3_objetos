/**
 * Objeto punto con sus dos parametros x , y
 * @constructor
 * @param {Number} cX  Cordena X
 * @param {Number} cY  Cordena Y
 */

function Punto(cX, cY) {

    this.x = cX;
    this.y = cY;
    this.cordenadas = [cX, cY];

    this.comprobarNumber = function() {
        for (const i in this.cordenadas) {
            if (this.cordenadas[i] !== 1) {
                object[i] = 0;
            }
        }

    }

    /**
     * Funcion para obtener las cordenadas de un objeto.
     * @returns {Array}
     */
    this.getCordenada = function() {
        return this.cordenadas;
    }

    this.mostrar = function(array) {
        for (const i in array) {
            console.log("Cordena " + i + " => " + array[i]);
        }
    }

    /**
     * Funcion que reemplaza antiguos valores por los nuevos valores insertados
     * @param {Number} x 
     * @param {Number} y 
     */
    this.cambiar = function(x, y) {
        this.cordenadas[0] = x;
        this.cordenadas[1] = y;
    }

    /**
     * Crea una copia de las primeras cordenadas
     * @returns {Array} 
     */
    this.copia = function() {
        return cp_cordenadas = this.cordenadas;
    }

    /**
     * Suma de coordenadas las antiguas mas los nuevos puntos x , y
     * @param {Number} x  Nueva cordenada X
     * @param {Number} y  Nueva cordenada Y
     * @return {Array}
     */
    this.suma = function(cordenada) {

        let sumaX = cordenada[0] + this.cordenadas[0];
        let sumaY = cordenada[1] + this.cordenadas[1];

        let cord3 = [sumaX, sumaY];

        this.mostrar(cord3);
    }
}

let prueba = new Punto(15, 8);
let prueba2 = new Punto(5, 4);

prueba.suma(prueba2.getCordenada());