export function esPinValido(pin) {

  if (!pin) {
    return false;
  }


  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }


  if (!/^\d+$/.test(pin)) {
    return false;
  }


  const primerNumero = pin[0];
  const todosIguales = pin.split('').every(digito => digito === primerNumero);

  if (todosIguales) {
    return false;
  }

  return true;
}