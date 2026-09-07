// Function using the concat() method to join two strings
function Concatenate_Function() {
    var sentence = "This is the first string. ";
    var sentence2 = "This is the second string.";
    var result = sentence.concat(sentence2);
    document.getElementById("Concatenate").innerHTML = result;
}

// Function using the slice() method to display part of a string
function Slice_Function() {
    var sentence = "This is a sentence that will be sliced.";
    var section = sentence.slice(10, 18);
    document.getElementById("Slice").innerHTML = section;
}

// Function using the toString() method to convert a number to a string
function Number_To_String() {
    var number = 123;
    var result = number.toString();
    document.getElementById("NumberString").innerHTML = result;
}

// Function using the toPrecision() method to specify the number of significant digits
function Precision_Function() {
    var number = 123.456789;
    var result = number.toPrecision(5);
    document.getElementById("Precision").innerHTML = result;
}

// Function using the toFixed() method to specify decimal places
function Fixed_Function() {
    var number = 123.4567;
    var result = number.toFixed(2);
    document.getElementById("Fixed").innerHTML = result;
}

// Function using the valueOf() method to return the primitive value of a number
function Value_Function() {
    var number = new Number(123);
    var result = number.valueOf();
    document.getElementById("Value").innerHTML = result;
}
