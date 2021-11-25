//!Erick first 8
//todo When the HTML document has been loaded and you can manipulate it with JavaScript
$(document).ready()

//todo When an HTML item has been clicked
$(".myvalue").click(() => {
    console.log("click")

})
//todo When an HTML item has been double clicked
$(".myvalue").dblclick(function () {
    console.log("dobleclick")

})
//todo When the user presses a key
$("#target").keypress(function () {
    console.log("Handler for .keypress() called.");

})
//todo When the user move the mouse coursor
$(document).bind('mousemove', function (e) {
    $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);

})
//todo hen the user changes a value of an text input
$('#inputDatabaseName').on('input', function (e) {
    alert('Changed!')

});
//todo When an image is loaded
$('#image1')
    .load(function () {

        console.log("image is loaded!")
        $('#result1').text('Image is loaded!');
    })
//todo When an image fails to load
$('#image1')
    .error(function () {
        console.log("image is no loaded")
        $('#result1').text('Image is not loaded!');
    });

//!Garikoitz Herrero

//todo When a form is submitted */
$("#target").submit(function (event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
});

//todo When the user changes the option of a select element -
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

//todo When you position the mouse over an element */
$("#outer").mouseover(function () { })

//todo When a checkbox is checked or unchecked */
$(".checkbox").change(function () {
    if (this.checked) {
        //Do stuff}
    }
})

//todo When a ul list item is clicked, show the item that was clicked*/

$('li.submenu a[href="#"]').click(function (e) {
    e.preventDefault();
    $("ul.ul_submenu").css("display", "block");
})

//todo Create an HTML element with any text value */
$("<div></div>")

//todo Remove an HTML element with any text value */
$(".hello").remove();

//todo Append an HTML element with any text value to a parent element */
$(".inner").append("<p>Test</p>");

//todo Prepend an HTML element with any text value to a parent element */
$(".inner").prepend("<p>Test</p>");

//! Jefferson    Bertinoti
//todo Create and add an HTML element with any text value after another element
var el = $("<span>" + 'text ' + "<span>");
var div = $("#foo");
$(el).insertAfter(div);

//todo Create and add an HTML element with any text value before another element
var el = $("<span>" + 'text ' + "<span>");
var div = $("#foo");
$(el).insertBefore(div);

//todo Clone an HTML element within other element
var newElement = $("element1").clone()

//todo Add a class to an HTML item
$("myDiv").addClass("mystyle");

//todo Remove a class to an HTML item
$("myDiv").removeClass("mystyle")

//todo Toggle a class of an HTML item
$("myDiv").toggleClass("mystyle");

//todo Add a disabled attribute to an HTML button
$("#myBtn").attr("disabled", true);

//todo Remove the disabled attribute of an HTML button
$("myBtn").attr("disabled", false);

//todo Set a data-src attribute to a img element
$('img').attr("data-src", "foobar");

//!Roger puigdemasa

//todo remove data-src attribute
$(button).on("click", function () {
    $(imgElement).removeData('src');
})

//todo hide
$(button).on("click", function () {
    $(selector).hide();
})

//todo show
$(button).on("click", function () {
    $(selector).show();
})

//todo fadeIn
$(button).on("click", function () {
    $(selector).fadeIn();
})

//todo fadeOut
$(button).on("click", function () {
    $(selector).fadeOut();
})

//todo Iterate a collection of elements
$(selector).each(function (indexInArray, valueOfElement) {

    $(this).css({
        "borde": "1px solid black"
    })
});
//todo Get the parent element
$(Selection).parent()

//todo Get the parent element
$(Selection).children()

//todo Get all the elements that have a certain class
$(".class")

//!Sergio Bermúdez

function getElemClasses() {
    $('.allElems').css('font-weight', 'bold');
}

function getElemId() {
    $('.elem').css('font-weight', 'bold');
}

function getElemsNoneClass() {
    $('.elem').each(function (index, element) {
        if ($(this).css('display') == 'none') {
            $(this).css('display', 'block');
            $(this).css('color', 'red');
        }
    });
}

function getOptionsSelected() {
    $('option[selected]');
}

function getFirstA() {
    let firstA = $('a').first();
    firstA.attr('href', 'nuevoSrc');
}

function getFirstInput() {
    let firstA = $('input').first();
    alert('firstA');
}

function removeAllElems() {
    $('.allElems').remove();
}

function animation() {
    $(document).ready(function (params) {
        setTimeout(() => {
            $('#animation').css('animation-name', 'example');
            $('#animation').css('animation-duration', '2s');
        }, 2000);
    })
}

animation();


