const cliente = {
    nome: "Joao",
    idade: 34,
    email:"@gmail.com",
    telefone: ["1235488","45678910"],
};

cliente.endereco = {
    rua: "R.Recife",
    numero: 1337,
    apartamento: true,
    complemento: "ap 987",
};

console.log(cliente.endereco.apartamento);