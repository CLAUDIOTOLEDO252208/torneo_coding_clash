const chinchon = (numero = [4, 3, 3, 6, 7, 8, 3], palo = "OCCEBOO") => {
  const palos = ["O", "C", "E", "B"];
  let cartas = {};
  let puntosTotales = numero.forEach(function (a) {
    total += a;
  });

  // Agrupar cartas por su palo
  palos.forEach((p) => (cartas[p] = []));
  for (let i = 0; i < 7; i++) {
    cartas[palo[i]].push(numero[i]);
  }

  // Ordenar cada grupo de cartas por su palo
  palos.forEach((p) => cartas[p].sort((a, b) => a - b));
};
