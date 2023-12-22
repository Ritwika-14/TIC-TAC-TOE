console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}
// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3], // Row 1
        [4, 5, 6, 7], // Row 2
        [8, 9, 10, 11], // Row 3
        [12, 13, 14, 15], // Row 4
        [0, 4, 8, 12], // Column 1
        [1, 5, 9, 13], // Column 2
        [2, 6, 10, 14], // Column 3
        [3, 7, 11, 15], // Column 4
        [0, 5, 10, 15], // Diagonal from top-left to bottom-right
        [3, 6, 9, 12], // Diagonal from top-right to bottom-left
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText !== "" &&
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[3]].innerText
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // The following lines add an animation effect to the winning line
            //document.querySelector(".line").style.transform = `translate(${e[0] % 4 * 25}vw, ${Math.floor(e[0] / 4) * 25}vw)`;
    
            if (e[0] % 4 === e[3] % 4) {
                document.querySelector(".line").style.width = "20vw";
                document.querySelector(".line").style.transform += " rotate(90deg)";
            } else if (Math.floor(e[0] / 4) === Math.floor(e[3] / 4)) {
                document.querySelector(".line").style.width = "20vw";
                document.querySelector(".line").style.transform += " rotate(0deg)";
            } else if (e[0] % 4 - Math.floor(e[0] / 4) === 3 - Math.floor(e[3] / 4)) {
                document.querySelector(".line").style.width = "28vw";
                document.querySelector(".line").style.transform += " rotate(-45deg)";
            } else {
                document.querySelector(".line").style.width = "28vw";
                document.querySelector(".line").style.transform += " rotate(45deg)";
            }
        }
    });
    
};


// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

