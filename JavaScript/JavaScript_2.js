// Add validation when the form is submitted.
document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Get the values entered into the form.
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Get the paragraph used for validation messages.
    var formMessage = document.getElementById("formMessage");

    // Stop the form from submitting automatically.
    event.preventDefault();

    // Check if the name field is empty.
    if (name === "") {

        formMessage.innerHTML = "Please enter your name.";
        return;
    }

    // Check if the email field is empty.
    if (email === "") {

        formMessage.innerHTML = "Please enter your email address.";
        return;
    }

    // Check if the email contains an @ symbol.
    if (!email.includes("@")) {

        formMessage.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Check if the message field is empty.
    if (message === "") {

        formMessage.innerHTML = "Please enter a message.";
        return;
    }

    // Display a success message.
    formMessage.innerHTML =
        "Thank you! Your message has been submitted.";

});