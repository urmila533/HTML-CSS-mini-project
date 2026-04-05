let boxes=document.querySelectorAll(".box");
let resetBut=document.querySelector("#reset");
let newgamebut=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;  //playeo playex

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () =>{
    turno=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>
{
    box.addEventListener("click", () =>{
        if(turno) {
            box.innerText="o";
            turno=false;
        }else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};

const showwinner = (winner) =>{

    msg.innerText = 'cograulaction, winner is ${winner}';
    // msg.innerText= $ winner
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkwinner = () =>{
    for(let pattern of winPatterns ){
            let pos1val= boxes[pattern[0]].innerText;
            let pos2val= boxes[pattern[1]].innerText;
            let pos3val= boxes[pattern[2]].innerText;
    
             if(pos1val !="" && pos2val !="" && pos3val !="") {
        if (pos1val === pos2val && pos2val === pos3val){
            showwinner(pos1val);
        }
    } 
    
     }

    
};


newgamebut.addEventListener("click",resetGame);
resetBut.addEventListener("click",resetGame);
