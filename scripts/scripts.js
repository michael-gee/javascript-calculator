var currentInput = [];

function clearInput(ac){
  
  document.getElementById("input").innerHTML = 0;
  
}

function operatorPress(operator){
  
}


function numPress(num) {
  
  var regex = /[^\w]/g;  
  var currentInput = document.getElementById(num).innerHTML;
    currentInput = currentInput.replace(regex, "");
  
  console.log(currentInput);
  
}