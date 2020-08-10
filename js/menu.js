
var a = document.getElementsByClassName("menu")[0];

var b = document.getElementsByClassName("others");


function show(){
    for (let i = 0; i < b.length; i++) {
 b[i].style.display = "block";
    }
};

function hide(){
     for (let i = 0; i < b.length; i++) {
 b[i].style.display = "none";
    }
};

a.addEventListener("click", show);
a.addEventListener("dblclick", hide);
