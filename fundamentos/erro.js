function tratarErroELancar(erro) {
  //   throw new Error("...");
  //   throw 10;
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

/// Tray Trata erros no sistema
function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (error) {
    tratarErroELancar(error);
  } finally {
    console.log("final");
  }
}

const obj = { name: "Roberto" };
imprimirNomeGritado(obj);
