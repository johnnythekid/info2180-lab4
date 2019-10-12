var game;


var status;


var board;


var controls;


var btn;


var divs;


var divs1;


var theSquares;


var factions;


var win=true;


var turns=0;


var arr_X;


var arr_O;


var arr_win = new Array([0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]);


window.onload = function(){


    game = document.querySelectorAll("#game");


    status = document.querySelectorAll("#status");


    board = document.querySelectorAll("#board");


    controls = document.querySelectorAll(".controls");


    divs = document.getElementsByTagName("div");


    divs1 = document.getElementsByClassName("square");


    factions = new Array("X","O");


    for(let i=0; i<divs.length;i++){


        if((divs[i].id=="") && (divs[i].className=="")){


            divs[i].classList.add("square");


        }


        if(divs[i].id=="status"){

            for(var j =0; j<divs1.length;j++){

                if(divs1[j].innerHTML=="X"){

                    arr_X[j]=j;

                    arr_X.sort();

                    win=arr_win.includes(arr_X);

                    if(win){

                        divs[j].textContent="Congratulations! X is the Winner!";

                        break;

                    }

                }

                else if(divs1[j].innerHTML=="O"){

                    arr_O[j]=j;

                    arr_O.sort();

                    win = arr_win.includes(arr_O);

                    if(win){

                        divs[j].textContent="Congratulations! O is the Winner!";

                        break;

                    }

                }

        }

        

        }


        if(divs[i].className=="square"){


            //divs[i].setAttribute("onclick");


            divs[i].onclick=function(){

                emptyOut(divs[i]);


            };

        


        }



    }



    btn=document.querySelector("button");


    btn.onclick = function(){


        Vanish();


        Vanish1();


    };


    function Vanish(){


        //divs1 = document.getElementsByClassName("square");


        for(var i=0; i<divs1.length;i++){


                divs1[i].textContent = " ";



        }

        turns=0;


    }


    function Vanish1(){


        for(var j=0; j<this.divs1.length;j++){


            if(divs[j].id=="status"){


                divs[j].textContent="Move your mouse over a square and click to play an X or an O.";


            }


        }


    }


    for( var l=0;l<this.divs.length;l++){


        divs[l].onmouseenter=function(){


            StyleOn()


        };


        divs[l].onmouseleave=function(){


            StyleOff()


        };


    }


    function StyleOn(){


        for(var i=0; i<divs1.length;i++){


         


         


         



        }


    }


    function StyleOff(){


        for(var i=0; i<divs1.length;i++){


            divs1[i].classList.remove("hover");


      }


        


    }

    function change(element){

        if(turns==0){

            element.innerHTML="X";

            turns=1;

        }

        else{

            element.innerHTML="O";

            turns=0;

        }

    }

    function emptyOut(element){

        var check=element.innerHTML;

        if(check=="X"|| check=="O"){


        }

        else{

            change(element);

        }

    }

}

