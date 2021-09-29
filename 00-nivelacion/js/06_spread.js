//Spread Operator

const frutas = ["manzana", "uva", "melon"];
const citricos = ["naranja", "limon", "toronja"];

//document.write(frutas);
//document.write(citricos);

//const nuevo = frutas + citricos;
//document.write(nuevo);

const nuevo = [...frutas, ...citricos];
document.write(nuevo);
