// Countdown function
// Counts down from 5 seconds and displays the remaining time.
function countdown() {
    var seconds = 5;
    function tick() {
        seconds = seconds - 1;
        if (seconds == 0) {
            alert("The countdown is complete!");
        } else {
            setTimeout(tick, 1000);
        }
    }
    tick();
}

// Keep track of which slide is currently displayed.
var slideIndex = 1;

// Display the first slide when the page loads.
showSlides(slideIndex);


// Move to the next or previous slide.
function plusSlides(n) {
    showSlides(slideIndex += n);
}


// Display a specific slide when a dot is clicked.
function currentSlide(n) {
    showSlides(slideIndex = n);
}


// Main slideshow function.
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");


    // Return to the first slide after the last slide.
    if (n > slides.length) {
        slideIndex = 1;
    }


    // Go to the last slide before the first slide.
    if (n < 1) {
        slideIndex = slides.length;
    }


    // Hide all slides.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    // Remove active status from all dots.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    // Display the current slide.
    slides[slideIndex - 1].style.display = "block";


    // Highlight the current dot.
    dots[slideIndex - 1].className += " active";
}


// Automatically change slides every 5 seconds.
setInterval(function () {
    plusSlides(1);
}, 5000);