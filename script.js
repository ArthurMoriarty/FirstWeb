"use strict";

// For the Analog Clock
setInterval(() => {
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hInterval = 30*hours + min/2 + sec/120;
    let minInterval = 6*min + sec/10;
    let secInterval = 6*sec;

    document.querySelector('.hour').style.transform = `rotate(${hInterval}deg)`
    document.querySelector('.min').style.transform = `rotate(${minInterval}deg)`
    document.querySelector('.sec').style.transform = `rotate(${secInterval}deg)`
})

// For the Tic Tac Toe game
let turn = 'X'

const checkWin = () => {
    let boxtext = Array.from(box);
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((elements) => {
        if((boxtext[elements[0]].innerText === boxtext[elements[1]].innerText) && (boxtext[elements[1]].innerText === boxtext[elements[2]].innerText) && (boxtext[elements[0]].innerText !== '')){
            document.querySelector('.gameResult').innerText = `${boxtext[elements[0]].innerText} wins`;
            alert(`${ boxtext[elements[0]].innerText} wins`)
        }
    })
}

const changeTurn = () => {
    turn = turn === 'X'?'O':'X'
}
let box = document.getElementsByClassName('box');
Array.from(box).forEach((element) => {
    if(element.innerText === ''){
        element.addEventListener('click', () => {
            element.innerText = turn;
            changeTurn();
            checkWin();
        })
    }
})

let button = document.getElementById('reset');
Array.from(box).forEach((element) => {
    reset.addEventListener('click', () => {
        element.innerText = '';
    })
})