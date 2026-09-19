// This function reads the custom data attribute.
function showAnimal() {

    // Get the paragraph that contains the data attribute.
    var animalElement = document.getElementById("animal");

    // Get the value stored in data-animal.
    var animal = animalElement.getAttribute("data-animal");

    // Display the animal on the page.
    document.getElementById("result").innerHTML =
        "My favorite animal is the " + animal + ".";
}