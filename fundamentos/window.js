let a = 3;

global.b = 123;
this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(this.c);
console.log(global.b); /// Global no NODE equivale a window no brouser
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

/// criando uma variavel maluca
abc = 3; /// jnão faça isso em casa!!
console.log(global.abc);

// module.exports = { e: 456, f: false, g: 'teste'}
