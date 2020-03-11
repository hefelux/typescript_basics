(()=>{
    // ====== INTERFACES =====

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = ( xmen: Xmen) => {
        console.log(`Enviar a ${ xmen.nombre } a la misión`);
    }

    const regresarCuartel = ( xmen: Xmen) => {
        console.log(`${ xmen.nombre } debe regresar al cuartel`);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision( wolverine );
    regresarCuartel( wolverine );

})();









