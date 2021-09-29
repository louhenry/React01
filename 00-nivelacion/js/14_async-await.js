//Async y Await

// const saludo = () => {
//   return new Promise((resolve) => {
//     resolve("Hola mundo");
//   });
// };
// saludo().then((response) => console.log(response));

// const saludo = async () => {
//   return "Hola Mundo";
// };
// saludo().then((response) => console.log(response));

const peticion = async () => {
  setTimeout(() => {
    const datos = {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    };
    console.log(datos);
  }, 2000);
};

peticion().then(console.log);
