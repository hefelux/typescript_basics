"use strict";
(() => {
    //====== CLASES ======
    //? FORMA TRADICIONAL DE APLICAR CONSTRUCTORES
    /*class Avenger {
        nombre: string;
        equipo: string;
        nombreReal: string;
        puedePelear: boolean;
        peleasGanadas: number;

        constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }*/
    //? USANDO TYPESCRIPT PARA APLICAR CONSTRUCTORES
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Ironman', 'Scott', true, 10);
    console.log(antman);
})();
