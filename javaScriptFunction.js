//!Erick Ayala first 8
//todo When the HTML document has been loaded and you can manipulate it with JavaScript
document.onload()

//todo When an HTML item has been clicked
document.addEventListener("click", () => {
    console.log("estoy haciendo un click")
})

//todo When an HTML item has been double clicked
document.addEventListener("dblclick", () => {
    console.log("estoy haciendo doble-click")
})

//todo When the user presses a key on the keyboard
window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

//todo When the user moves the mouse cursor
document.onmousemove()

//todo  to see where the mouse moves
onmousemove = function (e) { console.log(`mouse location = X: ${e.x}, Y: ${e.y}`) }

//todo When the user changes a value of an text input
document.querySelector("input").addEventListener("change", function () {
    alert("Input Changed");
})

document.getElementById("mytext").value = "My value"

//todo When an image is loaded
var img = document.querySelector('img')
if (img.complete) {
    console.log("imagen esta cargada")
}

//todo version2 otra manera de hacerlo mas como te lo pide
function testImage(URL) {
    var tester = new Image();
    tester.onload = imageFound;
    tester.onerror = imageNotFound;
    tester.src = URL;
}
function imageFound() {
    alert('That image is found and loaded');
}
function imageNotFound() {
    alert('That image was not found.');
}

//todo When an image fails to load, (if you write an incorrect image url the loading of the image will fail)

function testImage(URL) {
    var tester = new Image();
    tester.onload = imageFound;
    tester.onerror = imageNotFound;
    tester.src = URL;
}

function imageFound() {
    alert('That image is found and loaded');
}

function imageNotFound() {
    alert('That image was not found.');
}


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

//todo remove data-src attribute
var imgElement = document.getElementById('');
imgElement.removeAttribute('data-src');

//todo hide
var Elemen = document.getElementById('');
GamepadButton.addEventListener("click", function () { Elemen.style.display = 'none'; })

//todo show
GamepadButton.addEventListener("click", function () { Elemen.style.display = 'block'; })

//todo Iterate a collection of elements
var arr = document.getElementById('');
for (const a of arr) {
    a.style.border = " 1px solid black"
}
//todo Get the parent element
var el = document.getElementById('');
el.closest();

//todo Get the collection of children
var myElement = document.getElementById('');
myElement.children;

//todo Get all the elements that have a certain class
var allclass = document.getElementsByClassName("class")
