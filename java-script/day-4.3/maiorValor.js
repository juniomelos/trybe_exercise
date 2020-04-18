function maiorValor(numbs){
    let indiceMaior=numbs[0];
    for (i in numbs){
        if(numbs[i]>indiceMaior)
        indiceMaior=i;
    }
    return indiceMaior;
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));