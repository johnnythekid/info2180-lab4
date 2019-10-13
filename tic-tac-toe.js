var game;
var status;
var board;
var controls;
var btn;
var divs;
var divs1;
var factions;
var winx;
var wino;
var turns=0;
window.onload =function(){





game = document.querySelectorAll("#game");
status = document.getElementById("status");
board = document.querySelectorAll("#board");
controls = document.querySelectorAll(".controls");
divs = document.getElementsByTagName("div");
divs1 = document.getElementsByClassName("square");
factions = new Array("X","O");





for(let i=0;i<divs.length;i++){





if((divs[i].id=="") && (divs[i].className=="")){





divs[i].classList.add("square");



divs[i].onmouseenter=function(){

styleOn(divs[i]);

};

divs[i].onmouseleave=function(){

styleOff(divs[i]);

};

}


if(divs[i].className=="square"){



divs[i].onclick=function(){



emptyOut(divs[i]);



};



}



}




btn=document.querySelector("button");





btn.onclick =function(){


Vanish();



Vanish1();

};








function 
Vanish(){



for(var i=0;i<divs1.length;i++){



divs1[i].textContent =
" ";
divs1[i].onclick=function(){
    emptyOut(divs1[i])
};
if(divs1[i].classList.contains("X")){
    divs1[i].classList.remove("X");
}
else{
    divs1[i].classList.remove("O");
}

}



turns=0;



}





function 
Vanish1(){



for(var
j=0;
j<this.divs1.length;j++){



if(divs[j].id=="status"){



divs[j].textContent="Move your mouse over a square and click to play an X or an O.";



}

}

}






function 
change(element){


if(turns==0){

element.innerHTML="X";
element.classList.add("X");


turns=1;




}



else{

element.innerHTML="O";
element.classList.add("O");


turns=0;



}



}



function 
emptyOut(element){



var 
check=element.innerHTML;



if(check=="X"||check=="O"){



}



else{



change(element);

winner();

}



}

function winner(){
    status = 
    document.getElementById("status");
for(var i = 0;i<divs.length;i++){

if(divs[i].id=="status"){

if((divs1[0].innerHTML=="X" &&
divs1[1].innerHTML=="X" &&
divs1[2].innerHTML=="X") || (divs1[3].innerHTML=="X"
 && divs1[4].innerHTML=="X" &&
divs1[5].innerHTML=="X") || (divs1[6].innerHTML=="X"
 && divs1[7].innerHTML=="X" &&
divs1[8].innerHTML=="X")||(divs1[0].innerHTML=="X"
 && divs1[3].innerHTML=="X" &&
divs1[6].innerHTML=="X")||(divs1[1].innerHTML=="X"
 && divs1[4].innerHTML=="X" &&
divs1[7].innerHTML=="X")||(divs1[2].innerHTML=="X"
 && divs1[5].innerHTML=="X" &&
divs1[8].innerHTML=="X")||(divs1[0].innerHTML=="X"
 && divs1[4].innerHTML=="X" &&
divs1[8].innerHTML=="X")||(divs1[0].innerHTML=="2"
 && divs1[4].innerHTML=="X" &&
divs1[6].innerHTML=="X")){

divs[i].textContent="Congratulations! X is the winner.";
winx=true;
}

else 
if((divs1[0].innerHTML=="O" &&
divs1[1].innerHTML=="O" &&
divs1[2].innerHTML=="O") || (divs1[3].innerHTML=="O"
 && divs1[4].innerHTML=="O" &&
divs1[5].innerHTML=="O") || (divs1[6].innerHTML=="O"
 && divs1[7].innerHTML=="O" &&
divs1[8].innerHTML=="O")||(divs1[0].innerHTML=="O"
 && divs1[3].innerHTML=="O" &&
divs1[6].innerHTML=="O")||(divs1[1].innerHTML=="O"
 && divs1[4].innerHTML=="O" &&
divs1[7].innerHTML=="O")||(divs1[2].innerHTML=="O"
 && divs1[5].innerHTML=="O" &&
divs1[8].innerHTML=="O")||(divs1[0].innerHTML=="O"
 && divs1[4].innerHTML=="O" &&
divs1[8].innerHTML=="O")||(divs1[2].innerHTML=="O"
 && divs1[4].innerHTML=="O" &&
divs1[6].innerHTML=="O")){

divs[i].textContent="Congratulations! O is the winner.";
wino=true;
}

}

}

}

function 
styleOn(element){



element.classList.add("hover");


}

function 
styleOff(element){



element.classList.remove("hover");



}

}

