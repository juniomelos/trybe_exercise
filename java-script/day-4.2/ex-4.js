let n = 5;
let blankSpace = '';
let asterisk = '*';
let middle = parseInt(n / 2);

for(let i=0; i<=middle; i++){
    for(let j=i; j<=middle; j++){
        blankSpace += ' ';
    }
    console.log(blankSpace + asterisk)
    blankSpace = '';
    asterisk += '**';
}