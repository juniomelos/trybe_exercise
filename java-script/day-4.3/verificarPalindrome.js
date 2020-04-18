
function verificaPalindrome(string){
    let palidromado = string.split('').reverse().join('');
    if(palidromado === string) {
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome('word'));
