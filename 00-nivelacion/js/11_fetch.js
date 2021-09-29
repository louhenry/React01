//Fetch API con promesas

//Complicado OLD
//XMLHttpRequest() //Ajax
// //SOAP
//<xml>
//</xml>

//REST
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
  });
