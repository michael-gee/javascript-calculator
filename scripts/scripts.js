//Current Entry String and Arr to Be Joined into String

//String is to hold values and keep numbers together
var currentInput = "";
var currentInputArr = [];

//AC (Clear) Button Function
function clearInput(ac){
  
  document.getElementById("input").innerHTML = 0;
  
  document.getElementById("current-entry").innerHTML = 0;
  
  // clear current input back to empty string
  currentInput = "";
  currentInputArr = [];
  
}

// Number Button Function
function buttonPress(button) {
  var regex = /[^\S]/g;  
  var currentButton = document.getElementById(button).innerHTML; 
  
  // Check if button pressed was a number, if not will return NaN
  var operatorCheck = parseInt(currentButton);
  
  if(operatorCheck === NaN){
    
  }
  
  console.log(operatorCheck);
  
  //gets rid of all whitespace
  currentButton = currentButton.replace(regex, "");
  
  currentInput += (currentButton);
  
  //Current Input Display
  document.getElementById("current-entry").innerHTML = currentInput;
  
  console.log(currentInput);
  
}
