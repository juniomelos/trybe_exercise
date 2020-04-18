function compararFinalString (word, ending){
    let lenghtString=word.length - ending.length;
    let finalWord='';
    for (i=lenghtString; i<word.length; i++){
        finalWord+=word[i];
    }
    if (finalWord === ending){
        return true;
      }else {
        return false;
      }
    }
    
    console.log(compararFinalString('Trybe', 'be'));
    console.log(compararFinalString("joaofernando", "fernan"));