
//Original Array
var arr1 = [10,5,6,11];

//The Array Where I store the spaces
var space = [];

//forEach loop into OG Array Values
arr1.forEach(x => {

  //Loop that begins in the index of X in OG Array
    for( i = arr1.indexOf(x); i < arr1.length; i++ ){
      //If next value is more, Subtract the current position in the loop vs the position of X in the array and push it into space array, then break
      if(x < arr1[i]){
      space.push(arr1.indexOf(arr1[i]) - arr1.indexOf(x));
      break;
      }  
    }
   
  });
  //Output all saved values
 console.log('The spaces for each value in OG Array are as follows ' + space);
  