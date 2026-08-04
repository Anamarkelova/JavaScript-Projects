// Create  a function that will display a string when the button is clicked
function My_First_Function() {
    var str="This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
//Create a function that will run when the button is clicked.    
function My_First_Function() { 
var str = "This is the beginning of the string."; 
str += " This is the end of the string."; // Use += to concatenate another string.
document.getElementById("message").innerHTML = str; // Display the concatenated string in the paragraph.
}