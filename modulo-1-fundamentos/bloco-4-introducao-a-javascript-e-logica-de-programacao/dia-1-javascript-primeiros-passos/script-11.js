let bruto = 10000;

function liquido(bruto) {
  function alicotaFinder(bruto) {
    if (bruto <= 1556.94) {
      return 0.08 * bruto;
    } else if (bruto <= 2594.92) {
      return 0.09 * bruto;
    } else if (bruto <= 5189.82) {
      return 0.11 * bruto;
    } else {
      if (0.11 * bruto <= 570.88) {
        return 0.11 * bruto;
      } else {
        return 570.88;
      }
    }
  }

  let alicotaInss = alicotaFinder(bruto);

  let base = bruto - alicotaInss;

  function impostoDeRendaFinder(base) {
    if (base <= 1903.98) {
      return 0;
    } else if (base <= 2826.65) {
      return 0.075 * base - 142.8;
    } else if (base <= 3751.05) {
      return 0.15 * base - 354.8;
    } else if (base <= 4664.68) {
      return 0.225 * base - 636.13;
    } else {
      return 0.275 * base - 869.36;
    }
  }

  let impostoDeRenda = impostoDeRendaFinder(base);
  
  return bruto - alicotaInss - impostoDeRenda;
}
console.log(liquido(bruto));
