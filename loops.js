function forLoop(array) {
  for (let i=0; i < 25; i++) {
    if (i===1) { 
      array[i] = "I am 1 strange loop."; 
      console.log(i);
      
    }
    else {
      array[i] = `I am ${i} strange loops.`;
      console.log(i);
    }
  }
    return array;
  }
  
function whileLoop (num1) {
  
  while (num1 !== 0) { 
    console.log(--num1)
  }
  
}

//`Happy holidays, ${name}!`