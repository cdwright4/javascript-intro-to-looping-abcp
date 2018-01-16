function forLoop(array) {
  for (var i=0; i < 24; i++) {
    if (i===1) { 
      array[i] = "I am 1 strange loop."; 

    }
    else {
      array[i] = `I am ${i} strange loops.`;
    }
  }
    return array;
  }
  
function whileLoop (num1) {
  
  while (num1 >= 0) { 
    if (num1===0) {return "done";}
    console.log(num1--)
  }
  
}

function 