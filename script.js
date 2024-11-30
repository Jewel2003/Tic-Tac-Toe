let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO =true;// player X, Player O
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked!")
        if(turnO){// agr player O ki turn hai to wo sirf O print karega
            box.innerText="O";
            turnO= false;// isko false kiya kiyu ki hume dobara player O ko click karne nei dena taki Player X ki turn aiye next
        }else{// agr player X ki turn hai to wo sirf X print karega
            box.innerText="X";
            turnO=true;//isko false kiya kiyu ki hume dobara player X ko click karne nei dena taki Player O ki turn aiye next

        }
        box.disabled=true;
        checkWinner();

    });
});

const disabledBoxes =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enabledBoxes =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes()
}

const checkWinner=()=>{
    for(let pattern of winPatterns) {
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;

        if(pos1Val != "" && pos2Val!= "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
               
                showWinner(pos1Val);
            }
        }

    }
};
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);