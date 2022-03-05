const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";

const template = `
 Olá
 ${nome}!`; //// Contacatenação com interpolação com crase backtick

console.log(concatenacao, template);
console.log(`1 + 1 = ${1 + 1}`); /// interpolação

const up = (texto) => texto.toUpperCase();
console.log(`Ei.. ${up("cuidado")}`);
