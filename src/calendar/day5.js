import React from "react";
import textInput from "./day5-input.txt";
import {getInput} from "../util";

let output5 = "day5";

const dayFiveOutput = async () => {
    let tempArray = await getInput(textInput);

    output5 = tempArray;
    console.log("answer:", output5);
};

const DayFive = () => {

    return (
        <button onClick={()=>dayFiveOutput()}>
            day five
        </button>
    )
};
export default DayFive;