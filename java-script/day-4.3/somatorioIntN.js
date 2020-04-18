function somatorioIntN (N){
    let soma=0;
    for(i=1; i<=N; i++){
        soma=soma+i;
    }
    return soma;
}
console.log(somatorioIntN(5));