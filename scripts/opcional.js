/**
 * Objeto padre
 * @param {String} marca 
 * @param {String} modelo 
 * @param {Number} ram 
 * @param {Number} disc 
 * @param {Number} pantalla 
 */
function Ordenador(marca, modelo, ram = 4, disc = 512, pantalla = 17) {

    this.modelo = modelo;
    this.marca = marca;
    this.ram = ram;
    this.disc = disc;
    this.pantalla = pantalla;

    this.informacion = function() {
        let info = "/------ INFORMACION -------/\n" +
            "Marca => " + this.marca + "\n" +
            "Modelo => " + this.modelo + "\n" +
            "Tamaño de memoria RAM => " + this.ram + " GB\n" +
            "Tamaño de disco duro => " + this.disc + " GB\n" +
            "Pulgadas de pantalla => " + this.pantalla + "\" \n\n";

        console.log(info);
    }
}

/**
 * Objeto hijo que hereda del objeto "Ordenador"
 * @param {String} marca 
 * @param {String} modelo 
 * @param {Number} ram 
 * @param {Number} disc 
 * @param {Number} pantalla 
 * @param {Number} autonomia 
 */
function Portatil(marca, modelo, ram, disc, pantalla, autonomia) {
    Ordenador.call(this, marca, modelo, ram, disc, pantalla);
    this.autonomia = autonomia;
}

Portatil.prototype = Object.create(Ordenador.prototype);


let ord1 = new Ordenador("Asus", "123");
ord1.informacion();

let hp_portatil = new Portatil("hp", "123", 16, 1000);

hp_portatil.informacion();