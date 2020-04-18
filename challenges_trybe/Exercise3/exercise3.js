function arraySum(numbers){
    var soma = 0;
    for (var index = 0; index < numbers.length; index++){
        soma += parseInt(numbers[index], 10);
    }
    console.log(soma);
}
var qtd = prompt ("Quantos números deseja inserir?");
var numbers = [ ];
for (index = 0; index < qtd; index++){
     numbers[index]= prompt ("Digite o número da " + (index + 1) + "ª posição:");
}
arraySum(numbers);
