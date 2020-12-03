import React from "react";
import textInput from "./day3-input.txt";
import {getInput} from "../util";

let output3 = "day3";

let trees = 0;
let posX = 0;
let posY = 0;

const sample = [
    "..##.......",
    "#...#...#..",
    ".#....#..#.",
    "..#.#...#.#",
    '.#...##..#.',
    "..#.##.....",
    ".#.#.#....#",
    ".#........#",
    "#.##...#...",
    "#...##....#",
    ".#..#...#.#",
]


const moveRight = (move, arr) => {
    posX = (posX + move)
    if (posX >= (arr[posY].length)) {
        posX = (posX - (arr[posY].length));
    }
}

const moveDown = (move) => {
    posY = (posY + move);
}

const moveRead = (arr, x, y) => {
    moveRight(x, arr);
    moveDown(y)
    console.log(trees)
    if (arr[posY].charAt(posX)){
        if (arr[posY].charAt(posX) === "#") {
            trees++;
            console.log(arr[posY].slice(0,(posX))+"X"+arr[posY].slice((posX+1))+" "+arr[posY].length+" " + arr[posY].charAt(posX) + " X: " + posX + " Y: " + posY)
        } else if (posX === 0) {
            console.log("O"+arr[posY].slice((posX+1))+" "+arr[posY].length+" " + arr[posY].charAt(posX) + " X: " + posX + " Y: " + posY)
        } else {
            console.log(arr[posY].slice(0,(posX))+"O"+arr[posY].slice((posX+1))+" "+arr[posY].length+" " + arr[posY].charAt(posX) + " X: " + posX + " Y: " + posY)
        }
    }

}

const dayThreeOutput = async () => {
    let tempArray = await getInput(textInput);
    let fixArray = [];
    tempArray.map(row => {
        fixArray.push(row.trim())
    })

    for (let i=0; i<=fixArray.length-2; i++){
        moveRead(fixArray, 1, 2);
    }

    output3 = trees;
    console.log("answer:", output3);
};

const DayThree = () => {

    return (
        <button onClick={()=>dayThreeOutput()}>
            day three
        </button>
    )
}
export default DayThree;