/// par nome/ valor
const saudacao = "Opa"; // context léxico 1 é o local em que a sua variavel foi definida fisicamente foi definido

function exec() {
  const saudacao = "falaaa"; // outro contexto lexico
  return saudacao;
}

/// objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: "pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
