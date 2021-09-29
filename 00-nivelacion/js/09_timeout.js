//TimeOut

const evaluar = () => {
  const edad = prompt("Cual es tu edad?");

  if (edad < 18) {
    alert("Menor de Edad");
    return;
  }
  alert("Ok, Mayor de Edad");
};

//evaluar();
setTimeout(evaluar, 2000);
