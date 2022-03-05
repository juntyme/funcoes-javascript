const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

/// var não tem scopo de função vai imprimir 10
funcs[2]();
funcs[8]();
