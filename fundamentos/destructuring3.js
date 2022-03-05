function rand({ min = 0, max = 100 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = {
  max: 50,
  min: 30,
};

console.log(rand(obj));
console.log(rand({ min: 955 })); /// Gerar numeros aleatorios entre 955 a 1000
console.log(rand({})); /// Passando um objeto vazio
// console.log(rand()); //// erro não esta passando o objeto
