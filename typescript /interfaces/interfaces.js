"use strict";
(() => {
    // ====== INTERFACES =====
    const enviarMision = (xmen) => {
        console.log(`Enviar a ${xmen.nombre} a la misión`);
    };
    const regresarCuartel = (xmen) => {
        console.log(`${xmen.nombre} debe regresar al cuartel`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarCuartel(wolverine);
})();
