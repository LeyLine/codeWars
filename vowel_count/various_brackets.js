function validBraces(braces){

  var openview = [];
  var closeedview =[];
  var truthy = 0;
  var falsy = 0;
  
  for(i=0;i<braces.length;i++){
    if(braces[i]=='(' || braces[i]=='{' || braces[i]=='['){
    openview.push(braces[i]);
    }
    else{
     closeedview.push(braces[i]);
    }
  }
  
    console.log(braces);
    console.log(openview);
    console.log(closeedview);

  for(i=0;i<openview.length;i++){

     var counter = closeedview.length - 1;
     
     if (openview[i] == '(' && closeedview[counter] == ')' ){
          truthy += 1;
          counter -= 1;
        }
      else if (openview[i] == '{' && closeedview[counter] == '}' ){
          truthy += 1;
          counter -= 1;
        }
      else if (openview[i] == '[' && closeedview[counter] == ']' ){
          truthy += 1;
          counter -= 1;
        }
      else {
        falsy += 1
        counter -= 1
      }
  } 
  var counter = openview.length - 1;
    for(i=0;i<closeedview.length;i++){

     
     if (openview[i] == '(' && closeedview[counter] == ')' || openview[i] == '(' && closeedview[i] == ')' ){
          truthy += 1;
          counter --;
        }
      else if (openview[i] == '{' && closeedview[counter] == '}' || openview[i] == '{' && closeedview[i] == '}'){
          truthy += 1;
          counter -- ;
        }
      else if (openview[i] == '[' && closeedview[counter] == ']' || openview[i] == '(' && closeedview[i] == ']'){
          truthy += 1;
          counter -- ;
        }
      else {
        falsy += 1
        counter -- 
      }
  } 
  
  if(truthy > falsy){
    return true
  }else if (truthy <= falsy){
  return false}

    
  }