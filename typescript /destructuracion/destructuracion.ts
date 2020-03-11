
//========== DESTRUCTURACIÓN OBJETOS Y ARREGLOS ===========

// ===== OBJETOS ======

const avenger = {
    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Droga'
}

// Destructuración objeto mediante creación de variables
//? Podemos indicar cualquier propiedad del objeto en el orden que queramos
//? Se pueden poner TODAS o sólo algunas de las propiedades del objeto
const { poder } = avenger;

//? La destructuración en argumentos de funciones aplican las mismas reglas que para variables
const extraerAvenger = ({ nombre, poder }: any) => {
    console.log(nombre);
    // console.log(clave);
    console.log(poder);
};

// extraerAvenger(avenger);

// ===== ARREGLOS ======

const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

// Destructuración arreglo mediante creación de variables
//? Se deben indicar TODOS los elementos del arreglo
//? Si queremos omitir uno elemento del arreglo en determinada posición lo dejamos vacío separado por ",".
const [thor, , spiderman] = avengers;
// console.log(thor);
// console.log(ironman);
// console.log(spiderman);

//? La destructuración en argumentos de funciones aplican las mismas reglas que para variables
const extraerAvengers = ([, , spiderman]: any) => {
    console.log(spiderman);
}

extraerAvengers(avengers);


