const valores = [7.7, 8.9, 6.3, 9.2]; // constante de array

console.log(valores[0], valores[3]);
console.log(!!valores[4]); /// valores undefined false

valores[4] = 10;
console.log(valores); /// carrega o array com <6 empty items>
console.log(valores.length);  /// contagem de caracteres

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

console.log(valores.pop()); /// retorna a ultimo valor
delete valores[0];
console.log(valores);

console.log(typeof valores);
