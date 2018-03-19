
// Creates Variables and Saves DOM Elements to each
var newBGColor = document.getElementById("newBGColor")
var colorChangeButton = document.getElementById("colorChangeButton");

// Eventlisten for button
//   Sets the body's background color to the user provided value
colorChangeButton.addEventListener("click", function(){

    document.body.style.backgroundColor = newBGColor.value;
})