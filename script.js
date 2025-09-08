let boxes = document.querySelectorAll(".col");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".newButton");
let msg = document.querySelector(".msg");
let msgCont = document.querySelector(".msgcont");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else
        {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgCont.classList.add("hide");
    msg.classList.remove("show");
}
const enableboxes = () => {
    for(let box of boxes)
    {
        box.innerText ="";
        box.disabled = false;
       
    }
}
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner Is ${winner}`;
    msgCont.classList.remove("hide");
    disableboxes();
    msg.classList.add("show");
}
const checkWinner = () => {
    for(let pattern of winPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                showWinner(pos1);
            }
             
        }
        
    }
}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);