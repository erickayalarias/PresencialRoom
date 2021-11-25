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
$( "myDiv" ).addClass( "mystyle" );

//todo Remove a class to an HTML item
$( "myDiv" ).removeClass("mystyle")

//todo Toggle a class of an HTML item
$("myDiv").toggleClass("mystyle");

//todo Add a disabled attribute to an HTML button
$("#myBtn").attr("disabled", true);

//todo Remove the disabled attribute of an HTML button
$("myBtn").attr("disabled", false);

//todo Set a data-src attribute to a img element
$('img').attr("data-src", "foobar");

//!Roger puigdemasa
//remove data-src attribute
$(button).on("click",function(){$(imgElement).removeData('src');})
//hide
$(button).on("click",function(){$(selector).hide();})
//show
$(button).on("click",function(){$(selector).show();})
//fadeIn
$(button).on("click",function(){$(selector).fadeIn();})
//fadeOut
$(button).on("click",function(){$(selector).fadeOut();})
//Iterate a collection of elements
$(selector).each( function (indexInArray, valueOfElement) {
    $(this).css({"borde":"1px solid black"})
});
//Get the parent element
$(Selection).parent()
//Get the parent element
$(Selection).children()
//Get all the elements that have a certain class
$(".class")
