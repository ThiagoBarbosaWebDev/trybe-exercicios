const fatorial = n => n > 0 ? n * (fatorial(n-1)) : 1;

console.log(fatorial(5))