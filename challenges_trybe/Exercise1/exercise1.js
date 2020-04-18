var n = prompt ("Entre com um número: ")  ;
fizzBuzz(n);
function fizzBuzz(n){
    for(var index = 1; index <=n; index++){
        if((index % 3 == 0) && (index % 5 != 0)){
            console.log("Fizz");
        }
        else if ((index % 5 == 0) && (index % 3 != 0)){
            console.log("Buzz");
        }
        else if ((index % 5 == 0) && (index % 3 == 0)){
            console.log("FizzBuzz");
        }
        else {
            console.log(index);
        }
    }
}
