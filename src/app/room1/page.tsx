"use client"

import { useState, useEffect } from "react";
import TypewriterEffect from "../ui/typewriter"
import ConditionalImage from "../ui/lock"
import ConditionalButton from "../ui/conditionalButton";

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
            <div className="basis-1/3"></div>
            <div className="basis-1/3">
                <ul>
                    <li className="pb-11">
                        {<TypewriterEffect text={atbashEncrypt("Hi " + text+ ", The code for the door is: SUPERNOVA. By the way: The quick brown fox jumps over the lazy dog")} />}
                    </li>
                    <li>
                        {<TypewriterEffect text={atbashEncrypt("Hi " + text+ ", The code for the door is: SUPERNOVA. By the way: The quick brown fox jumps over the lazy dog")} font="Wingdings" />}
                    </li>
                    <li className="pt-5">
                        <div className="self-start flex flex-col items-center justify-center">
                            <ConditionalImage showGreenImage={inputValueKey.toUpperCase()=="SUPERNOVA"}/>
                            <div className="pt-5"></div>
                            <input
                                id="Key"
                                type="text"
                                value = {inputValueKey}
                                onChange = {(event) => setInputValueKey(event.target.value)}
                                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <div className="pt-5"></div>
                            <ConditionalButton showGreenImage={inputValueKey.toUpperCase()=="SUPERNOVA"}/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="basis-1/3"></div>
        </main>
    );
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const backAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA"

function atbashEncrypt(text: string): string{
    text = text.toUpperCase()
    const message = [];
    for (let i = 0; i < text.length; i++){
        if (alphabet.includes(text[i])){
            message.push(backAlphabet[alphabet.indexOf(text[i])])
            //console.log(message)
        } else message.push(text[i])
    }
    return message.join("")
}

function atbashDecrypt(text:string): string{
    text = text.toUpperCase()
    const message = [];
    for (let i = 0; i < text.length; i++){
        if (alphabet.includes(text[i])){
            message.push(alphabet[backAlphabet.indexOf(text[i])])
        } else message.push(text[i])
    }
    return message.join("")
}