// Description:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Solution

function makeNegative(num) {
    let number;
     if(num > 0){
       number = num * (-1)
       return number
     } else if (num < 0){
       number = num
       return number
     } else {
       return 0
     }
   }

   console.log(makeNegative(-5));
   