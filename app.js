let boxes = document.querySelectorAll(".box");
let resetbutton =  document.querySelector("#reset-button");
let newButton = document.querySelector("#new-button");
let msgContainer =  document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true ; //player X,player O


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide")
}


boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
            // player o
            box.innerText ="O"
            turnO = false;
        }else {
            // player x 
            box.innerText = "X"
            turnO = true;
        }

        box.disabled = true;
        
        checkWinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congartulations  , winner is ${winner} `;
    msgContainer.classList.remove("hide")
    disableboxes();
}


const  checkWinner = () =>{
    for( let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;
        
        
        if(postVal1 != "" && postVal2 !="" && postVal3 != ""){
            if(postVal1 === postVal2 && postVal2 === postVal3){
                showWinner(postVal1);
                
            }
        }
    }
    };

    newButton.addEventListener("click",resetGame);
    resetbutton.addEventListener("click",resetGame);
        




    