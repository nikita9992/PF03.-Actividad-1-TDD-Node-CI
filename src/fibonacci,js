function fibonacci(n) {  
     if (n < 0) {
        throw new RangeError("solo números enteros ≥ 0");
     }
  
    if (n === 0) 
    {
        return 0;
    }
    if (n === 1) 
    {
        return 1;
    }

    let anterior1 = 0;
    let anterior2 = 1;
    let resultado = 0;

    for (let i = 2; i <= n; i++) {
        resultado = anterior1 + anterior2;
        anterior1 = anterior2;
        anterior2 = resultado;
    }

    return resultado;
}

export{
    fibonacci
}



