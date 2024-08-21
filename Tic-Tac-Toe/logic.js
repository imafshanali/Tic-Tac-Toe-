let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let TurnO = true;

let WinningPattern = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], 
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (TurnO) {
            box.textContent = "O";
            TurnO = false;
        } else {
            box.textContent = "X";
            TurnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () =>{
    TurnO = true;
    enablebtn();
    txtContainer.classList.add("chappak")
}

const disablebtn = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enablebtn = () => {
    for (const box of boxes) {
        box.disabled= false;
        box.innerText = "";
    }
}

const displayWinner = (Winner) => {
    msg.innerText = `Congratulations, ${Winner} Won`;
    txtContainer.classList.remove("chappak");
    disablebtn();
};

const checkWinner = () => {
    for (let pattern of WinningPattern) {
        pat1 = boxes[pattern[0]].innerText;
        pat2 = boxes[pattern[1]].innerText;
        pat3 = boxes[pattern[2]].innerText;
        if (pat1 != "" && pat2 != "" && pat3 != "") {
            if (pat1 === pat2 && pat2 === pat3) {
                console.log("Winner is", pat1);
                displayWinner(pat1);
            }
        }
    }
}

resetbtn.addEventListener("click", resetGame);
