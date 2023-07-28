const dados = require("./cliente.json");
console.log(dados);

console.log(typeof(dados));

const clienteString = JSON.stringify(dados);

console.log(clienteString);
console.log(typeof(clienteString));

const obejtoCliente = JSON.parse(clienteString);


console.log(obejtoCliente);
console.log(typeof(obejtoCliente));

