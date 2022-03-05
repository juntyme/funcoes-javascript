console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Bola"; /// Cria automaticamente um atributo no objeto
// obj1["nome"] = "Bola 2";

console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome; // Atributos
  this.exec = function (teste) {
    /// Funcões
    console.log(teste);
  };
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec("teste");
