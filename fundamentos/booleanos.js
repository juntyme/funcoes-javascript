let isAtivo = false; //// JavaSript resolve apenas True e False

console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1; // Representa True Booleano
console.log(typeof !!isAtivo); /// Dupla negação para converter em bool
console.log(!!-1); /// Inteiros mesmo negativos true
console.log(!!" "); /// espaço  true
console.log(!![]); /// array true
console.log(!!{}); // Objeto true
console.log(!!Infinity); // Infinito true exemplo 7 / 0
console.log(!!(isAtivo = true)); /// se o valor que é resolvido para variavel

/// Resolve para falso
console.log("os falso..");
console.log(!!""); // false
console.log(!!null); /// false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!(isAtivo = false));

console.log("para finalizar");
console.log(!!("" || null || 0 || " ")); /// resolve para verdadeiro com " " em branco ou carregado

let nome = "";
console.log(nome || "Desconhecido"); // Operação logica parecido com if ternário
