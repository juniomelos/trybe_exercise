function menorValor(numbs){
    let indiceMenor=numbs[0];
    for (i in numbs){
        if(numbs[i]<indiceMenor)
        indiceMenor=i;
    }
    return indiceMenor;
}
console.log(menorValor([2, 3, 6, 7, 10, 1]));