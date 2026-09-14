// This function uses a while loop to count from 1 to 10.
function Call_Loop() {

    var Digit = "";
    var X = 1;
    while (X <= 10) {
        Digit += "<br>" + X;
        X++;
    }

    document.getElementById("Loop").innerHTML = Digit;
}

// This function uses a for loop to display a list of musical instruments.
function for_Loop() {

    var Instruments = [
        "Guitar",
        "Piano",
        "Violin",
        "Drums",
        "Flute"
    ];

    var Content = "";
    for (var i = 0; i < Instruments.length; i++) {
        Content += Instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// This function creates an array and displays one of its values.
function array_Function() {

    var Instruments = [
        "Guitar",
        "Piano",
        "Violin",
        "Drums",
        "Flute"
    ];

    document.getElementById("Array").innerHTML = Instruments[0];
}

// Create a constant object with properties and values.
const Vehicle = {
    Make: "Toyota",
    Model: "Camry",
    Year: 2020,
    Color: "Blue"
};

// Change the Color property.
Vehicle.Color = "Red";

// Add a new Doors property.
Vehicle.Doors = 4;

// Display information from the constant object.
function constant_function() {

    document.getElementById("Constant").innerHTML =
        "The vehicle is a " + Vehicle.Color + " " +
        Vehicle.Year + " " +
        Vehicle.Make + " " +
        Vehicle.Model +
        " with " + Vehicle.Doors + " doors.";
}

// Use the let keyword to create a variable.
let vehicleType = "Car";

console.log(vehicleType);

// Function that uses a return statement.
function return_Function() {
    let number = 10;
    return number;
}

// Call the function and display the returned value in the console.
console.log(return_Function());

// Create an object using the let keyword.
let Person = {
    firstName: "Ana",
    lastName: "Smith",
    age: 30,

    // Method inside the object.
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Display the person's name on the webpage.
function person_Function() {

    document.getElementById("Person").innerHTML =
        "Name: " + Person.fullName() + "<br>" +
        "Age: " + Person.age;
}

    // Demonstrate the break statement.
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }
    console.log("Break loop: " + i);
}

// Demonstrate the continue statement.
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }
    console.log("Continue loop: " + i);
}