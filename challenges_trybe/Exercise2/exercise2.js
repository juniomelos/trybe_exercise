function lastLetter(word){
    for (var index = 0; index <= word.length ; index++ ){
        if (index == (word.length -2)){
            var secondLast = word[index];
        }
        if (index == word.length - 1){
            var lastLetter = word[index];
        }
    }
    return (lastLetter + " " + secondLast);
}

var word = prompt ("Digite uma palavra: ");
var letters = lastLetter(word);
console.log(letters);
