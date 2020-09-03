let n=10;
let resposta;


for(let i=0;i<=n;i++){
    if(n%i===0)
        resposta = "impar";
    else
        resposta = "par";
}
console.log(resposta);