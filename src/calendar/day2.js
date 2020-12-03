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


const buildList = (arr) => {
    let finalArr = [];
    arr.map(objItem => {
        if (checkString(objItem.min, objItem.max, objItem.letter, objItem.password) === true) {
            finalArr.push(objItem.password)
        }
    })
    return finalArr;
}








const dayTwoOutput = async () => {
    let tempArray = await getInput(textInput);
    let tempTransform = transform(tempArray);

    // var temp = "This is a string.";
    // var letter = "s";
    // var re = new RegExp(letter, "g");
    // console.log(re);
    // var count = (temp.match(re) || []).length;
    // console.log(count);






    output2 = buildList(tempTransform);
    console.log("answer:", output2);
};

const DayTwo = () => {

    return (
        <button onClick={()=>dayTwoOutput()}>
            day two
        </button>
    )
}
export default DayTwo;