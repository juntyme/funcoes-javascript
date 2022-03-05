function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; /// Tipo ou
  const comprarTv50 = trabalho1 && trabalho2; /// tipo e
  //   const comprarTv32 = !!(trabalho1 ^ trabalho2);
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; // Operador unádio

  // Retornar um objeto foram reduzina
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };

  //    return { comprarSorvete: comprarSorvete, comprarTv50: comprarTv50, comprarTv32: comprarTv32comprarTv32, manterSaudavel };
}
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
