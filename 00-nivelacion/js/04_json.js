//JSON JavaScript Object Notation
//Object Destructuring

//const Usuario = {
//  name: "Luis",
//  edad: 20,
//  email: "mail@mail.com",
//};
//document.write("<p>" + Usuario.name + "</p>");
//document.write("<p>" + Usuario.edad + "</p>");
//document.write("<p>" + Usuario.email + "</p>");

const { name, email } = {
  name: "Luis",
  edad: 20,
  email: "mail@mail.com",
};

document.write("<p>" + name + "</p>");
document.write("<p>" + email + "</p>");
