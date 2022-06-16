var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
//var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//console.log(removeCartItemButtons)
//for (var)
//const ad = document.getElementsByClassName("btn");
function myFunction(){
  document.getElementById("demo").innerHTML="Added To Cart";

}