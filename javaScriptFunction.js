//! Jefferson    Bertinoti
//todo Create and add an HTML element with any text value after another element
el = document.createElement("span");
el.innerHTML = "text";
var div = document.getElementById("foo");
insertAfter(div, el);

//todo Create and add an HTML element with any text value before another element
el = document.createElement("span");
el.innerHTML = "text";
var div = document.getElementById("foo");
insertBefore(div, el);

//todo Clone an HTML element within other element
var oldElement = document.querySelector('#element1');
var newElement = oldElement.cloneNode(true);

//todo Add a class to an HTML item
var element = document.getElementById("myDiv");
element.classList.add("mystyle");

//todo Remove a class to an HTML item
var element = document.getElementById("myDiv");
element.classList.remove("mystyle");

//todo Toggle a class of an HTML item
var element = document.getElementById("myDiv");
element.classList.toggle("mystyle");

//todo Add a disabled attribute to an HTML button
document.getElementById("myBtn").disabled = true;

//todo Remove the disabled attribute of an HTML button
document.getElementById('myBtn').disabled = false;

//todo Set a data-src attribute to a img elementconst 
var image = document.createElement('img');
image.className = 'my-img';
image.src = '/img/img1.jpg';
image.setAttribute('data-src', 'foobar');
document.body.appendChild(image);

//!Roger puigdemasa
//remove data-src attribute
var imgElement = document.getElementById('');
imgElement.removeAttribute('data-src');
//hide
var Elemen = document.getElementById('');
GamepadButton.addEventListener("click",function(){Elemen.style.display = 'none';})
//show
GamepadButton.addEventListener("click",function(){Elemen.style.display = 'block';})
//Iterate a collection of elements
var arr = document.getElementById('');
for (const a of arr) {
    a.style.border=" 1px solid black"
}
//Get the parent element
var el = document.getElementById('');
el.closest();
//Get the collection of children
var myElement = document.getElementById('');
myElement.children;
//Get all the elements that have a certain class
var allclass=document.getElementsByClassName("class")
