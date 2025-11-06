
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("El argumento debe ser un número entero ≥ 0");
  }

  if (n <= 1) return n;

  let [prev, curr] = [0, 1];

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}

export{
    fibonacci
}



