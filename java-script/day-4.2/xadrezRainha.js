let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;
​
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 8;
​
let ataqueFeito = false;
​
if (posicaoRainhaLinha === posicaoPecaLinha ||
    posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueFeito = true;
}
​
// Diagonal superior direita
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna + i;
​
    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
// Diagonal inferior esquerda
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna - i;
​
    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
// Diagonal superior esquerda
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna - i;
​
    if (linhaRainha > 8 || colunaRainha < 1) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
// Diagonal inferior direita
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna + i;
​
    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
if (ataqueFeito) {
    console.log("Parabéns para a Rainha");
} else {
    console.log("Não foi dessa vez!");



/* CODIGO MAIS LIMPO


let posicaoRainhaLinha = 7;
let posicaoRainhaColuna = 5;
​
let posicaoPecaLinha = 4;
let posicaoPecaColuna = 2;
​
let ataqueFeito = false;
​
let diferençaY = posicaoRainhaLinha - posicaoPecaLinha;
let diferençaX = posicaoRainhaColuna - posicaoPecaColuna;
​
if (diferençaX === 0 || diferençaY === 0){
	ataqueFeito = true;
}
else if (Math.abs(diferençaY) === Math.abs(diferençaX)) // math.abs para pegar o valor absoluto assim numeros negativos se tornam positivos
{
	ataqueFeito = true;
}
​
​
if (ataqueFeito) {
		console.log("Parabéns para a Rainha");
} else {
		console.log("Não foi dessa vez!");
}
*/