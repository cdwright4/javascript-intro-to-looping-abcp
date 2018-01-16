function forLoop(array) {
  for (i=0; i < array.length-1; i++) {
    if (i===1) { array[i] = "I am 1 strange loop."; }
    else {
      array[i] = "I am ${i} strange loops.";
    }
  }
    return array;
  }
  

for (var i=0; i<10; i++) {
  console.log("This is number" + i + " that I am going to print");
  
}