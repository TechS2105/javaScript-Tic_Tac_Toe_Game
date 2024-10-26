let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winningText");
let newBtn = document.querySelector("#new-start");

let turn0 = true;

let winningPattern = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],

];

boxes.forEach((boxVal) => {

    boxVal.addEventListener('click', () => {

        if (turn0) {
            
            boxVal.innerText = "O";
            turn0 = false;

        } else {
            
            boxVal.innerText = "X";
            turn0 = true;

        }

        boxVal.disabled = true;
        checkWinners();

    });

});

const showWinner = (winner) => {

    msgContainer.classList.remove("hide");
    msg.innerHTML = `<span style="font-size: 35px;"> Congratulations! </span> <br><span style="text-transform:uppercase; font-size:90px;">  Winner is ${winner} </span>`;

}

const startGame = () => {

    for (let boxVal of boxes) {
        
        boxVal.innerText = "";
        boxVal.disabled = false;

    }

}

const resetGame = () => {

    for (let boxReset of boxes) {
        
        boxReset.innerText = "";
        boxReset.disabled = false;

    }

}

const boxDisable = () => {

    boxes.forEach((boxDisable) => {

        boxDisable.disabled = true;

    });

}

resetBtn.addEventListener('click', () => {

    resetGame();

})

newBtn.addEventListener('click', () => {

    msgContainer.classList.add("hide");
    startGame();

})

const checkWinners = () => {

    for (let pattern of winningPattern) {

        let player1Val = boxes[pattern[0]].innerText;
        let player2Val = boxes[pattern[1]].innerText;
        let player3Val = boxes[pattern[2]].innerText;

        if (player1Val !== "" && player2Val !== "" && player3Val !== "") {
            
            if (player1Val === player2Val && player2Val === player3Val) {

                showWinner(player1Val);
                boxDisable();

            }

        }

    }

}
