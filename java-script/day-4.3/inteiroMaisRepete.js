function inteiroRepete(lista){
    let contagem=0;
    let repetidos=0;
    let comparador=lista[0];
    for (let i=0; i<lista.length; i++){
        let contador=0;
        for(let j=0; j<lista.length; j++){
            if(lista[j]===lista[i]){
                contador++;
            }
            if(contador>comparador){
                comparador=contador;
                repetidos=lista[j];
            }
        }
    }
    return repetidos;
}
console.log(inteiroRepete([2, 3, 2, 5, 8, 2, 3]));