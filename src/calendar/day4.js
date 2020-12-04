import React from "react";
import textInput from "./day4-input.txt";
import {getInput} from "../util";

let output4 = "day4";

let testSample = [
    "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd",
    "byr:1937 iyr:2017 cid:147 hgt:183cm",
    " ",
    "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884",
    "hcl:#cfa07d byr:1929",
    " ",
    "hcl:#ae17e1 iyr:2013",
    "eyr:2024",
    "ecl:brn pid:760753108 byr:1931",
    "hgt:179cm",
    " ",
    "hcl:#cfa07d eyr:2025 pid:166559648",
    "iyr:2011 ecl:brn hgt:59in",
];

const dayFourOutput = async () => {
    let tempArray = await getInput(textInput);

    let concatArray = [];
    let tempConcat = "";

    tempArray.map((item, index)=> {
        if(item.length > 1){
            tempConcat = (tempConcat + " " + item).trim();
        } else {
            concatArray.push(tempConcat);
            tempConcat = "";
        }
    });

    // console.log(concatArray)

    let objList = []
    concatArray.map(id => {
        let tempArr = [];
        id.split(" ").map(thing => {
            let tempThing = thing.split(":");
            tempArr.push(tempThing);
            // tempObj[tempThing[0]] = tempThing[1];
        });
        objList.push(tempArr);
    })
console.log(objList)
    let finalList = [];
    let finalCount = 0;
    objList.map(item => {
        if(item.length === 8){
            let testValid8 = true;
            // item.map(value => {
            //     if(value[0] === "byr") {
            //         if(value[1] < 1920 || value[1] > 2002){
            //             testValid8 = false;
            //         }
            //     }
            //     if(value[0] === "iyr") {
            //         if(value[1] < 2010 || value[1] > 2020){
            //             testValid8 = false;
            //         }
            //     }
            //     if(value[0] === "eyr") {
            //         if(value[1] < 2020 || value[1] > 2030){
            //             testValid8 = false;
            //         }
            //     }
            //     if(value[0] === "hgt") {
            //         if(value[1].slice(-2) === "cm"){
            //             let hgt = value[1].slice(0,-2);
            //             if (hgt < 150 || hgt > 193) {
            //                 testValid8 = false;
            //             }
            //         }
            //         if(value[1].slice(-2) === "in"){
            //             let hgt = value[1].slice(0,-2);
            //             if (hgt < 59 || hgt > 76) {
            //                 testValid8 = false;
            //             }
            //         }
            //     }
            //     if(value[0] === "ecl") {
            //         if (value[1] !== "amb" && value[1] !== "blu" && value[1] !== "brn" && value[1] !== "gry" && value[1] !== "grn" && value[1] !== "hzl" && value[1] !== "oth"){
            //             testValid8 = false;
            //         }
            //     }
            //     if(value[0] === "hcl") {
            //         if(value[1].charAt(0) === "#" && value[1].slice(1).length === 6){
            //             testValid8 = false;
            //         }
            //     }
            //     if(value[0] === "pid"){
            //         if (value[1].length !== 9){
            //             testValid8 = false;
            //         }
            //     }
            // })
            if (testValid8) {
                finalList.push(item);
                finalCount++;
            }
        }
        if(item.length === 7){
            let testValid7 = true;
            item.map(value => {
                if(value[0] === "cid") {
                    testValid7 = false;
                }
                // if(value[0] === "byr") {
                //     if(value[1] < 1920 || value[1] > 2002){
                //         testValid7 = false;
                //     }
                // }
                // if(value[0] === "iyr") {
                //     if(value[1] < 2010 || value[1] > 2020){
                //         testValid7 = false;
                //     }
                // }
                // if(value[0] === "eyr") {
                //     if(value[1] < 2020 || value[1] > 2030){
                //         testValid7 = false;
                //     }
                // }
                // if(value[0] === "hgt") {
                //     if(value[1].slice(-2) === "cm"){
                //         let hgt = value[1].slice(0,-2);
                //         if (hgt < 150 || hgt > 193) {
                //             testValid7 = false;
                //         }
                //     }
                //     if(value[1].slice(-2) === "in"){
                //         let hgt = value[1].slice(0,-2);
                //         if (hgt < 59 || hgt > 76) {
                //             testValid7 = false;
                //         }
                //     }
                // }
                // if(value[0] === "ecl") {
                //     if (value[1] !== "amb" && value[1] !== "blu" && value[1] !== "brn" && value[1] !== "gry" && value[1] !== "grn" && value[1] !== "hzl" && value[1] !== "oth"){
                //         testValid7 = false;
                //     }
                // }
                // if(value[0] === "hcl") {
                //     if(value[1].charAt(0) === "#" && value[1].slice(1).length === 6){
                //         testValid7 = false;
                //     }
                // }
                // if(value[0] === "pid"){
                //     if (value[1].length !== 9){
                //         testValid7 = false;
                //     }
                // }
            })
            if (testValid7) {
                finalList.push(item);
                finalCount++;
            }
        }
    })

    output4 = finalList;
    console.log("answer:", finalCount, output4);
};

const DayFour = () => {

    return (
        <button
            className="fri wk1"
            onClick={()=>dayFourOutput()}
        >
            day four
        </button>
    )
};
export default DayFour;