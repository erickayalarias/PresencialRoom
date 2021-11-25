//!Erick Ayala first 8
//When the HTML document has been loaded and you can manipulate it with JavaScript
document.onload()
//When an HTML item has been clicked
document.addEventListener("click", ()=>{
    console.log("estoy haciendo un click")
})
//When an HTML item has been double clicked
document.addEventListener("dblclick", ()=>{
    console.log("estoy haciendo doble-click")
})
//When the user presses a key on the keyboard
window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
  }, false);
//When the user moves the mouse cursor
document.onmousemove()
// to see where the mouse moves
onmousemove = function(e){console.log(`mouse location = X: ${e.x}, Y: ${e.y}`)}
//When the user changes a value of an text input
document.querySelector("input").addEventListener("change",function () {
    alert("Input Changed");
})

document.getElementById("mytext").value = "My value"

//When an image is loaded
var img = document.querySelector('img')
if (img.complete) {
  console.log("imagen esta cargada")}

//version2 otra manera de hacerlo mas como te lo pide
function testImage(URL) {
    var tester=new Image();
    tester.onload=imageFound;
    tester.onerror=imageNotFound;
    tester.src=URL;
}
function imageFound() {
    alert('That image is found and loaded');
}
function imageNotFound() {
    alert('That image was not found.');
}

//When an image fails to load, (if you write an incorrect image url the loading of the image will fail)

function testImage(URL) {
    var tester=new Image();
    tester.onload=imageFound;
    tester.onerror=imageNotFound;
    tester.src=URL;
}

function imageFound() {
    alert('That image is found and loaded');
}

function imageNotFound() {
    alert('That image was not found.');
}




//! Jefferson    Bertinoti
