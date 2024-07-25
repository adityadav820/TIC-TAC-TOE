let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO= true;

const patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO =true;
    ennableButtons();
    msgContainer.classList.add("hide"); 

};

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        // console.log("button clicked");
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    })
});
let countClick=0;
const checkWinner = ()=>{
    
    countClick++;
    for(let pattern of patterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("Winner", pos1val);
                disableButtons();
                showWinner(pos1val);
                countClick=0;
            }
        }
        
    }
    if(countClick==9){
        countClick=0;
        tieGame();
    }
};
const tieGame =() =>{
    msg.innerText= `OOPS! ,Better Luck Next Time`;
    msgContainer.classList.remove("hide");
};
const showWinner = (winner)=>{
    msg.innerText= `congratulation , Winner is "${winner}"`;
    // console.log(msg.innerText);
    // console.log(msgContainer.classList);
    msgContainer.classList.remove("hide");
};

const disableButtons = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const ennableButtons = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);