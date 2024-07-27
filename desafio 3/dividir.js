function dividiendo(numero, veces) {
  for (let i = 0; i < veces; i++) {
    numero = Math.floor(numero / 2);
  }
  return numero;
}

console.log(dividiendo(38, 4));
