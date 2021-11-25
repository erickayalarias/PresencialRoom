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
//! Jefferson  Bertinoti
