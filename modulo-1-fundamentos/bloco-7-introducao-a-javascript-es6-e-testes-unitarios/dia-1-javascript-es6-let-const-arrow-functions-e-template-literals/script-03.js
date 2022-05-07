const fatorial = (n) => {
  let m = n - 1;
  while (m > 0) {
    n *= m;
    m -= 1;
  }
  return n;
};

console.log(fatorial(6));
