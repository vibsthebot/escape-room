"use client"

import { useState, useEffect } from "react";
import ConditionalButton from "../ui/conditionalButton";
import ConditionalImage from "../ui/lock";
import TypewriterEffect from "../ui/typewriter";
import Image from 'next/image'
import FadeIn from "../ui/fadeIn";
import Timer from "../ui/timer";

export default function Page(){
    const [text, setText] = useState('');
    const [inputValueKey, setInputValueKey] = useState<string>('');
    useEffect(() => {
        const localStorageText = window.localStorage.getItem('name');
        if (localStorageText) {
        setText(localStorageText);
        }
        console.log()
    }, []);
    return (
        <main className="p-11 flex">
            <div className="basis-1/3">
            <div className="relative">
              <Image className= "w-full h-full object-cover" src = {"/slip-of-paper.png"} width={500} height={500} alt="Slip of paper"/>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-bold">124234111413114344<br /> <br />clé pour échapper au module</div>
            </div>
            </div>
            <div className="basis-1/3">
                <ul>
                    <li>
                    <TypewriterEffect text={transpose("You have almost escaped. The password for the secret door is: Sputnik", 8, true)}/>
                    </li>
                    <li className="fixed w-1/3 bottom-5">
                        <FadeIn waitBeforeFade={40000}>
                        <div className="self-start flex flex-col items-center justify-center">
                            <ConditionalImage showGreenImage={inputValueKey.toUpperCase()=="SPUTNIK"}/>
                            <div className="pt-5"></div>
                            <input
                                id="Key"
                                type="text"
                                placeholder="Cipher Key = # letters in ship's destination"
                                value = {inputValueKey}
                                onChange = {(event) => setInputValueKey(event.target.value)}
                                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <div className="pt-5"></div>
                            <div>
                                <ConditionalButton showGreenImage={inputValueKey.toUpperCase()=="SPUTNIK"} link={"/room4"}/>
                            </div>
                        </div>
                        </FadeIn>
                    </li>
                </ul>
            </div>
            <div className="basis-1/3">
            <Timer/>
            </div>
        </main>
    )
}

function transpose(message: string, key: number, isEncrypt: boolean): string {
    const charArray: string[] = message.toUpperCase().split(" ").join("x").split("");

    if (isEncrypt) {
        // Calculate number of columns
        const charArray: string[] = message.toUpperCase().split(" ").join("x").split("")
        const numOfCol = Math.ceil(charArray.length / key);  // Number of columns in the grid
        const numOfRows = key;
        const firstMatrix: string[][] = [];
        for (let i = 0; i < numOfCol; i++) {
            firstMatrix[i] = new Array(numOfRows).fill("x");  // Fill with empty strings
        }

        let index = 0;
        // Fill the matrix by rows
        for (let i = 0; i < numOfCol; i++) {
            for (let j = 0; j < numOfRows; j++) {
                if (index < charArray.length) {
                    firstMatrix[i][j] = charArray[index];
                    index++;
                }
            }
        }

        // Create the transposed matrix (to get the ciphertext)
        const finalArray: string[] = [];
        for (let i = 0; i < numOfRows; i++) {
            for (let j = 0; j < numOfCol; j++) {
                finalArray.push(firstMatrix[j][i]);  // Read the columns of the firstMatrix to make the finalArray
            }
        }
        return finalArray.join("");


    } else {
        // Calculate number of columns
        const numOfCol = Math.ceil(message.length / key);

        // Create first matrix (partially encrypted message)
        const firstMatrix: string[][] = [];
        for (let i = 0; i < key; i++) {
            firstMatrix[i] = new Array(numOfCol).fill("");
        }

        let index = 0;
        // Fill first matrix by columns
        for (let i = 0; i < key; i++) {
            for (let j = 0; j < numOfCol; j++) {
                if (index < message.length) {
                    firstMatrix[i][j] = message[index];
                    index++;
                }
            }
        }

        // Create transposed matrix (fully decrypted message)
        const finalMatrix: string[][] = [];
        for (let i = 0; i < numOfCol; i++) {
            finalMatrix[i] = new Array(key).fill("");
        }

        const finalArray: string[] = [];
        // Fill transposed matrix and final array by swapping rows and columns
        for (let i = 0; i < numOfCol; i++) {
            for (let j = 0; j < key; j++) {
                finalMatrix[i][j] = firstMatrix[j][i];
                finalArray.push(firstMatrix[j][i]);
            }
        }
        return finalArray.join("");
    }
}
