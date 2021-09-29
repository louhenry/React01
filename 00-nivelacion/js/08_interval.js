//Intervalos
//TimeOut
const saludo = () => {
  document.write("<li>Hola Mundo</li>");
};

//intervalo de tiempo son milisegundos, 1000ms = 1seg
document.write("<ul>");
setInterval(saludo, 2000);
document.write("</ul>");
