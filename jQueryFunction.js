//!Erick first 8
//When the HTML document has been loaded and you can manipulate it with JavaScript
$(document).ready()
//When an HTML item has been clicked
$(".myvalue").click(()=>{
    console.log("click")
})
//When an HTML item has been double clicked
$(".myvalue").dblclick(function(){
    console.log("dobleclick")
  })
//When the user presses a key
  $( "#target" ).keypress(function() {
    console.log( "Handler for .keypress() called." );
  })
//When the user move the mouse coursor
$(document).bind('mousemove',function(e){ 
    $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY); 
})
//When the user changes a value of an text input
$('#inputDatabaseName').on('input',function(e){
    alert('Changed!')
});
//When an image is loaded
$('#image1')
	.load(function(){
        console.log("image is loaded!")
		$('#result1').text('Image is loaded!');	
	})
//When an image fails to load
$('#image1')
    .error(function(){
        console.log("image is no loaded")
		$('#result1').text('Image is not loaded!');
	});
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

//todo remove data-src attribute
$(button).on("click",function(){$(imgElement).removeData('src');})

//todo hide
$(button).on("click",function(){$(selector).hide();})

//todo show
$(button).on("click",function(){$(selector).show();})

//todo fadeIn
$(button).on("click",function(){$(selector).fadeIn();})

//todo fadeOut
$(button).on("click",function(){$(selector).fadeOut();})

//todo Iterate a collection of elements
$(selector).each( function (indexInArray, valueOfElement) {

    $(this).css({"borde":"1px solid black"})
});
//todo Get the parent element
$(Selection).parent()

//todo Get the parent element
$(Selection).children()

//todo Get all the elements that have a certain class
$(".class")

