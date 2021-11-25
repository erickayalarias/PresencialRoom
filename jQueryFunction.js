//! Jefferson  Bertinoti

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