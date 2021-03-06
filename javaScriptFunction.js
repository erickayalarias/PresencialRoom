//!Erick Ayala first 8
//todo When the HTML document has been loaded and you can manipulate it with JavaScript
document.onload()
//When an HTML item has been clicked
document.addEventListener("click", () => {
    console.log("estoy haciendo un click")
})
//When an HTML item has been double clicked
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
onmousemove = function (e) {
    console.log(`mouse location = X: ${e.x}, Y: ${e.y}`)
}

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

//!Garikoitz Herrero 

//todo When a form is submitted
document.getElementById("myForm").submit();

//todo When the user changes the option of a select element -


//todo <select onchange = "myFunction()" ><p id = "demo" > < /p> */

function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}

//todo When you position the mouse over an element


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

//todo When a checkbox is checked or unchecked
function validate() {
    if (document.getElementById('X').checked) {
        alert("checked");
    } else {
        alert("You didn't check it!");
    }
}
//todo When a ul list item is clicked, show the item that was clicked

$('li.submenu a[href="#"]').click(function (e) {
    e.preventDefault();
    $("ul.ul_submenu").css("display", "block");
})

//todo Create an HTML element with any text value
document.createElement("BUTTON");

//todo Remove an HTML element with any text value */
var myobj = document.getElementById("demo");
myobj.remove();

//todo Append an HTML element with any text value to a parent element */
let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

//todo Prepend an HTML element with any text value to a parent element */
let div = document.createElement("div");
let span = document.createElement("span");
div.prepend(span);

//todo remove data-src attribute
var imgElement = document.getElementById('');
imgElement.removeAttribute('data-src');

//todo hide
var Elemen = document.getElementById('');
GamepadButton.addEventListener("click", function () {
    Elemen.style.display = 'none';
})

//todo show
GamepadButton.addEventListener("click", function () {
    Elemen.style.display = 'block';
})

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


//!Sergio Berm??dez

function getElemClasses() {
    let allElems = document.getElementsByClassName('allElems');
    for (const elem of allElems) {
        elem.style.fontWeight = 'bold';
    }
}

function getElemId() {
    let elem = document.getElementById('elem');
    elem.style.fontWeight = 'bold';
}

function getElemsNoneClass() {
    let allElems = document.getElementsByClassName('allElems');
    for (const elem of allElems) {
        if (elem.style.display == 'none') {
            elem.style.display = 'block';
            elem.style.color = 'red';
        }
    }
}

function getOptionsSelected() {
    let allElems = document.querySelectorAll('option[selected]');
}

function getFirstA() {
    let firstA = document.querySelector('a');
    firstA.href = 'AAA';
}

function getFirstInput() {
    let firstA = document.querySelector('input');
    alert('firstA');
}

function removeAllElems() {
    let allElems = document.querySelectorAll('.allElems');
    for (const elem of allElems) {
        elem.remove();
    };
}

function animation() {
    document.addEventListener('DOMContentLoaded', function (params) {
        let animationHTML = document.getElementById('animation');
        setTimeout(() => {
            animationHTML.style.animationName = 'example';
            animationHTML.style.animationDuration = '2s';
        }, 2000);
    })
}
