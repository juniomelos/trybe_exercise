let n = 3;
let blankSpaceInit = ''; blankSpaceMid = ' ';
let asterisk = '';
let middle = parseInt(n / 2);

if(n % 2 == 1){
    for(let i=0; i<=middle; i++){  
        for(let j=i; j<=middle; j++){ 
            blankSpaceInit += ' ';
        }
        asterisk = '*'

        if(i == 0){
            console.log(blankSpaceInit + asterisk)
            blankSpaceInit = '';
        }
        else{
            if(i < middle){
            console.log(blankSpaceInit + asterisk + blankSpaceMid + asterisk)
            blankSpaceInit = '';
            blankSpaceMid += '  '; 
            }
            else{
                for(let k=1; k<n; k++)
                    asterisk += "*";
                console.log(blankSpaceInit + asterisk)
            }
        }
    }
}else
    console.log('The base of the pyramid has to be an odd value')