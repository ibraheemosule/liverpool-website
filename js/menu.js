
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


var submeet = document.getElementsByClassName("submit")[0];
var display = document.getElementsByClassName("result")[0];
const guess = Number(Math.round(Math.random()*50));
var track = document.getElementsByClassName("numOfTrial")[0].innerText;
var play = document.getElementsByClassName("play")[0];
var div = document.getElementsByTagName("div")[1];

function submit(){
var valu = document.getElementsByClassName("value")[0].value;
track = parseInt(track) + 1;
document.getElementsByClassName("numOfTrial")[0].innerText = track;
if(track==5) {
  document.getElementsByClassName("value")[0].value = 0
  alert(`Random Number is ${guess}.
  Better luck next time`)
  document.location.reload();
};
 if(isNaN(valu) || valu>50 || valu < 0){
  display.innerText = "Enter a number between 1-50"
      } else if(valu==guess) {
        alert("CORRECT, YOU ARE A GENIUS")
        document.getElementsByClassName("value")[0].value = 0;
        document.location.reload();
       } else if(valu>guess) {
             display.innerText = "Number too high"
       } else if(valu<guess) {
             display.innerText = "Number too low"
         
       };
};
submeet.addEventListener("click", submit);

function ready(){
  play.style.display = "none";
  div.style.display ="block";
};
play.addEventListener("click", ready);


