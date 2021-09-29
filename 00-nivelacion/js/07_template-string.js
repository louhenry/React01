//Template String

const nombre = "Luis";
const edad = new Date().getFullYear() - 1984;

console.log("Bienvenido " + nombre + ", Tu edad es: " + edad);
console.log("Bienvenido", nombre, ", Tu edad es:", edad);
console.log(`Bienvenido ${nombre}, Tu edad es: ${edad}`);
console.log(`Bienvenido ${nombre}, Tu edad es: ${edad}`.toUpperCase());

const mensaje = `Bienvenido ${nombre}, Tu edad es: ${edad}`;
console.log(mensaje);
