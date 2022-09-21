//  To append value to form expression for calc
function num(value) {
    document.getElementById("result").value += value;
}
//  To reset the calc and set the value to zero
function clr() {
    document.getElementById("result").value = "0";
}

// To remove last typed value / symbols
function del() {
    let val = document.getElementById("result").value;
    document.getElementById("result").value = val.slice(0, -1);
}

// Actual calc of the equation goes here.
function calc() {
    var value = String(document.getElementById("result").value); // convert the whole expression into string
    var result = eval(value); // use inbuilt eval function to calculate the result value
    document.getElementById("result").value = result; // update the result value to the display menu.
}