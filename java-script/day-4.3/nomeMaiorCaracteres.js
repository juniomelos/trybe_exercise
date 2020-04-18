function nomeMaiorCaracteres(lista){
    let nome='';
    let primeiroNome=lista[0].length;
    for (i in lista){
        if(lista[i].length>primeiroNome){
            primeiroNome=lista[i].length;
            nome=lista[i];
        }
    }
    return nome;
}
console.log(nomeMaiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));