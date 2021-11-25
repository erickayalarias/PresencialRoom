//! Jefferson  Bertinoti

//!Roger puigdemasa

//!Garikoitz Herrero

/* When a form is submitted
 */
$("#target").submit(function (event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
});
/* When the user changes the option of a select element -
 */
/* <form >
    <input class = "target"type = "text"value = "Field 1" >
    <select class = "target" >
    <option value = "option1"selected = "selected" > Option 1 </option> 
    <option value = "option2" > Option 2 < /option> 
    < /select> 
</form> */
$(".target").change(function () {
    alert("Handler for .change() called.");
});
/* When you position the mouse over an element
 */
$("#outer").mouseover(function () {})

/* When a checkbox is checked or unchecked */
$(".checkbox").change(function () {
    if (this.checked) {
        //Do stuff}
    }
})

/* When a ul list item is clicked, show the item that was clicked
 */

$('li.submenu a[href="#"]').click(function (e) {
    e.preventDefault();
    $("ul.ul_submenu").css("display", "block");
})

/* Create an HTML element with any text value */
$("<div></div>")

/* Remove an HTML element with any text value */
$(".hello").remove();

/* Append an HTML element with any text value to a parent element */
$(".inner").append("<p>Test</p>");

/* Prepend an HTML element with any text value to a parent element */
$(".inner").prepend("<p>Test</p>");