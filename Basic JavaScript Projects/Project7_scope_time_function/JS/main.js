// Global variable
var globalVariable = "This is a global variable";


// Function containing a local variable
function My_Function() {

    // Local variable
    var localVariable = "This is a local variable";

    console.log(localVariable);
}


// Function intentionally containing an error for debugging
function Debug_Function() {

    var number = 10;

    // Display the number in the console
    console.log(number);

    // Intentional error for debugging
    console.log(undefinedVariable);
}


// Function that checks the current time
function Time_Function() {

    // Get the current hour
    var Time = new Date().getHours();

    // Variable to hold the greeting
    var Greeting;

    // Use an if statement to determine the greeting
    if (Time < 12) {
        Greeting = "Good morning!";
    }
    else if (Time < 18) {
        Greeting = "Good afternoon!";
    }
    else {
        Greeting = "Good evening!";
    }

    // Display the greeting in the HTML paragraph
    document.getElementById("Greeting").innerHTML = Greeting;
}


// My own if statement
var Temperature = 20;

if (Temperature > 15) {
    console.log("It is warm outside.");
}


// Function to check if the user is old enough to drive
function CheckDrivingAge() {

    // Get the age entered by the user
    var Age = document.getElementById("UserAge").value;

    // Check the user's age
    if (Age >= 16) {
        document.getElementById("DrivingResult").innerHTML =
            "You are old enough to drive.";
    }
    else {
        document.getElementById("DrivingResult").innerHTML =
            "You are not old enough to drive yet.";
    }
}