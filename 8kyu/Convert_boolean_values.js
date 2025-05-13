// Description:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solution

function boolToWord( bool ){
    const yes = 'Yes';
    const no = 'No';  
    return bool ? yes : no
  }

  console.log(boolToWord(false));
  