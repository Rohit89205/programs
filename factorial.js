function fact(num){
    let sum = 1;
    while(num > 0){
        // sum *= num;
        sum = sum * num
        num--
    }
    console.log(sum, 'sum')
}

fact(10);


function facts(num){
    let sum = 0;
    if(num > 0){
        facts(num - 1)
        
    }
    return;
}

facts(5)