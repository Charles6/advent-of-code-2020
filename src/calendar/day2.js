import React from "react";
import textInput from "./day2-input.txt";
import {getInput} from "../util";

let output2 = "day2";

const transform = (arr) => {
    let transformed = [];
    arr.map(item => {
        let split = item.split(" ");
        let range = split[0].split("-")
        let obj = {
            min: range[0],
            max: range[1],
            letter: split[1].charAt(0),
            password: split[2]
        }
        transformed.push(obj);
    })
    return transformed;
};

const checkString = (min, max, letter, password) => {
    let re = new RegExp(letter, "g");
    let count = (password.match(re) || []).length;
    if (count >= min && count <= max) {
        return true;
    }
    return false;
};

const checkString2 = (posA, posB, letter, password) => {
    let returnBool = false;
    let A = false;
    let B = false;
    if (password.charAt(posA-1) === letter) {
        A = true;
        returnBool = true;
    }
    if (password.charAt(posB-1) === letter) {
        B = true;
        returnBool = true;
    }
    if (A === true && B === true) {
        returnBool = false;
    }
    


    return returnBool;
}


const buildList = (arr) => {
    let finalArr = [];
    arr.map(objItem => {
        if (checkString2(objItem.min, objItem.max, objItem.letter, objItem.password) === true) {
            finalArr.push(objItem.password)
        }
    })
    return finalArr;
}




const dayTwoOutput = async () => {
    let tempArray = await getInput(textInput);
    let tempTransform = transform(tempArray);

    output2 = buildList(tempTransform);
    console.log("answer:", output2);
};

const DayTwo = () => {

    return (
        <button 
            className="wed wk1"
            onClick={()=>dayTwoOutput()}
        >
            day two
        </button>
    )
}
export default DayTwo;