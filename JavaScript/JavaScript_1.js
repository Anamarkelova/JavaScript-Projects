// This function uses a switch statement to choose an animal.
function animal_Function() {

    // Get the animal selected by the user.
    var Animal = document.getElementById("Animal_Input").value;

    // Get the element by its class name.
    var Output = document.getElementsByClassName("animal-output")[0];

    // Use a switch statement to determine the message.
    switch (Animal) {

        case "Dog":
            Output.innerHTML = "You selected a dog.";
            break;

        case "Cat":
            Output.innerHTML = "You selected a cat.";
            break;

        case "Bird":
            Output.innerHTML = "You selected a bird.";
            break;

        case "Horse":
            Output.innerHTML = "You selected a horse.";
            break;

        default:
            Output.innerHTML =
                "Please enter Dog, Cat, Bird, or Horse.";
    }
}

// Get the canvas element.
var canvas = document.getElementById("myCanvas");

// Create a 2D drawing context.
var ctx = canvas.getContext("2d");

// Create a linear gradient from left to right.
var gradient = ctx.createLinearGradient(0, 0, 400, 0);

// Add the first color to the gradient.
gradient.addColorStop(0, "blue");

// Add the second color to the gradient.
gradient.addColorStop(1, "purple");

// Use the gradient as the fill color.
ctx.fillStyle = gradient;

// Fill the entire canvas with the gradient.
ctx.fillRect(0, 0, 400, 200);