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
  currentEntry = "";
  currentInputArr = [];
  
}

// Number Button Function
function buttonPress(button) {
  var regex = /[^\S]/g;  
  var currentButton = document.getElementById(button).innerHTML; 
   //gets rid of all whitespace
  currentButton = currentButton.replace(regex, "");
  //ParseInt button press to make sure Button is a number
  var numCheck = parseInt(currentButton);
  
  if(numCheck === NaN) {
    currentInputArr.push(currentInput);

  } else {
    currentInput += (currentButton);
  
    //Current Input Display
    document.getElementById("current-entry").innerHTML = currentInput;
  }
   
  console.log(currentInput);
  console.log(currentInputArr);
  
}
