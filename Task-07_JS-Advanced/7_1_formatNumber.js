function createPhoneNumber(numArray){
    let format = "+7 (XXX) XXX-XX-XX";
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (numArray.length != 10 ) {
        return 'Invalid input';
    }
    for(var i = 0; i < numArray.length; i++) {
        if(digits.includes(numArray[i])) {
            format = format.replace('X', numArray[i]);
        } else {
            return 'Invalid input'
        } 
    }
        return format;
  }
  console.log("Phone number formatting: ")
  console.log(createPhoneNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]));
  console.log(createPhoneNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]));
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]));
  console.log(createPhoneNumber([]));
  console.log(createPhoneNumber('aw93fha='));
  console.log("");