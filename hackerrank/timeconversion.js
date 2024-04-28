function conversion(s){
    let firstVal = s.slice(0, 2);
    let midValue = s.slice(2, 8);
    let lastVal = s.slice(8, 10);

    // console.log(midValue, 'midValue')

    if(firstVal == 12 && lastVal == "AM"){
        firstVal = '00';
    } else if (firstVal < 12 && lastVal == "AM"){
        firstVal = firstVal
    } else if (firstVal == 12 && lastVal == "PM"){
        firstVal = firstVal;
    } else if (firstVal < 12 && lastVal == "PM"){
        firstVal = +firstVal + 12;
    } else {
        return 'wrong input';
    }
    return firstVal + midValue;

}

conversion('07:05:45PM')
