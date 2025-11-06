function esPinValido(pin) {

    if (pin === null || pin === undefined) {
        return false;
    }


    if (pin === '') {
        return false;
    }

    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }


    for (let i = 0; i < pin.length; i++) {
        const caracter = pin[i];
        if (caracter < '0' || caracter > '9') {
            return false;
        }
    }


    let primerNumero = pin[0];
    let todosIguales = true;
    for (let i = 1; i < pin.length; i++) {
        if (pin[i] !== primerNumero) {
            todosIguales = false;
            break;
        }
    }

    if (todosIguales) {
        return false;
    }
    return true;
}

export
{
    esPinValido
}