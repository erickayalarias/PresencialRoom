//! Jefferson    Bertinoti

//!Roger puigdemasa

//!Garikoitz Herrero 

/* When a form is submitted
 */
document.getElementById("myForm").submit();

/* When the user changes the option of a select element -
 */

/* <select onchange = "myFunction()" >
    <p id = "demo" > < /p> */

function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}

/* When you position the mouse over an element
 */

document.getElementById("demo").onmouseover = function () {
    mouseOver()
};
document.getElementById("demo").onmouseout = function () {
    mouseOut()
};

function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}

/* When a checkbox is checked or unchecked
 */
function validate() {
    if (document.getElementById('X').checked) {
        alert("checked");
    } else {
        alert("You didn't check it!");
    }
}
/* When a ul list item is clicked, show the item that was clicked
 */
$('li.submenu a[href="#"]').click(function (e) {
    e.preventDefault();
    $("ul.ul_submenu").css("display", "block");
})

/* Create an HTML element with any text value */
document.createElement("BUTTON");

/* Remove an HTML element with any text value */
var myobj = document.getElementById("demo");
myobj.remove();

/* Append an HTML element with any text value to a parent element */
let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

/* Prepend an HTML element with any text value to a parent element */
let div = document.createElement("div");
let span = document.createElement("span");
div.prepend(span);