"use strict";
(() => {
    // ====== TIPADO DE PROMESAS =====
    //! CAMBIAR EN EL TSCONFIG EL TARGET A ES6 PORQUE ES5 NO LO SOPORTA (EN ANGULAR GRACIAS A LOS POLYFILLS QUEDA SOLUCIONADO)
    //? El tipado debe ser en relación a lo que devuelvo en el resolve de la promesa, en este caso un NUMBER
    const retirarDinero = (monto) => {
        let montoActual = 1000;
        return new Promise((resolve, reject) => {
            if (monto > montoActual) {
                reject('No hay suficientes fondos');
            }
            else {
                montoActual -= monto;
                resolve(montoActual);
            }
        });
    };
    retirarDinero(1500)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(err => console.warn(err));
})();
