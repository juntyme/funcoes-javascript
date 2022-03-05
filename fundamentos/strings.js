const escola = "Cod3r";

console.log(escola.charAt(4)); // Mostra o caracter selecionado
console.log(escola.charAt(5)); /// Não Gera erro retorna vazio

console.log(escola.charCodeAt(3)); /// Retorna o codigo do caracter
console.log(escola.indexOf("r")); /// localiza o index associado a palavra
console.log(escola.substring(1)); //// Seleciona os caracteres
console.log(escola.substring(1, 3)); /// Seleciona os indice do inicio ao fim exclui o indece 3

console.log("Escola ".concat(escola).concat("!")); //// Concatenação
console.log("Escola " + escola + "!"); //// Concatenação

console.log(escola.replace(/\w/, "e")); /// replece as palavras

console.log("Ana,Maria,Pedro".split(/,/)); /// Cria um Array
