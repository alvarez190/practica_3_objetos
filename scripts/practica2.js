function Array(dato) {
    this.valor = dato;
    this.suma = 0;
    this.aux = this.valor.length;

    /** Calculo la media de un array y retorno el resultado por la funcion llamada 'media' 
     * @returns {Number} 
     */

    this.media = function() {
        for (const i in this.valor) {
            this.suma += this.valor[i];
        }

        return this.suma / this.aux;
    }
}

let array = [1, 2, 3, 4, 5, 6];

var calc = new Array(array);

console.log("La media del array es => " + calc.media());