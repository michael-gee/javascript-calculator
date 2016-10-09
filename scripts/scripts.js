//Current Entry String and Arr to Be Joined into String

//String is to hold values and keep numbers together
var currentInput = "";
var currentEntry = [];
var currentInputArr = [];

//AC (Clear) Button Function
function clearInput(ac){
  
  document.getElementById("input").innerHTML = 0;
  
  document.getElementById("current-entry").innerHTML = 0;
  
  // clear current input back to empty string
  currentInput = "";
  currentEntry = [];
  currentInputArr = [];
  
} // clearInput() bracket end

// Number Button Function
function buttonPress(button) {
  var operators = ["x", "+", "-", "/"]
  var regex = /[^\S]/g;  
  var currentButton = document.getElementById(button).innerHTML; 
   //gets rid of all whitespace
  currentButton = currentButton.replace(regex, "");
  
  var checkIfOperator = operators.indexOf(currentButton);
  
  // When a number is pressed
  if (checkIfOperator === -1) {
    
    if(operators.indexOf(currentEntry[currentEntry.length -1]) !== -1){
      currentInput = "";
    }
    
    currentInput += currentButton;
    currentEntry.push(currentButton);
  
    //Current Input Display
    document.getElementById("current-entry").innerHTML = currentEntry.length === 0 ? "0" : currentEntry.join("");
    document.getElementById("input").innerHTML = currentInput;    
  } else { //when an operator is pressed
    currentInputArr.push(currentInput);
    
    currentInput = "";
    currentInput += currentButton;
    currentEntry.push(currentButton);
    document.getElementById("input").innerHTML = currentButton;
    
    document.getElementById("current-entry").innerHTML = currentEntry.join("");
    
  }
   
  console.log(currentInput);
  console.log(currentEntry);
  console.log(currentInputArr);
  
}
