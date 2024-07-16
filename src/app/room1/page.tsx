"use client"

import { useState, useEffect } from "react";
import TypewriterEffect from "../ui/typewriter"
import ConditionalImage from "../ui/lock"
import ConditionalButton from "../ui/conditionalButton";
import FadeIn from "../ui/fadeIn";

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
                        {<TypewriterEffect text={atbashEncrypt("Dear " + text+ ", This ship has had a major engine malfunction. You are caught within the gravity of Planet WASP-12b, and your ship will spiral and crash into it. Your only hope for survival is the hidden escape pod accessible in the hallway adjacent to the command module. In order to override  the ship’s emergency lockdown, you must input the code word “Supernova”. By the way: The quick brown fox jumps over the lazy dog")} />}
                    </li>
                    <li>
                        {<TypewriterEffect text={atbashEncrypt("Dear " + text+ ", This ship has had a major engine malfunction. You are caught within the gravity of Planet WASP-12b, and your ship will spiral and crash into it. Your only hope for survival is the hidden escape pod accessible in the hallway adjacent to the command module. In order to override  the ship’s emergency lockdown, you must input the code word “Supernova”. By the way: The quick brown fox jumps over the lazy dog")} font="Wingdings" />}
                    </li>
                    <li className="fixed w-1/3 bottom-5">
                        <FadeIn waitBeforeFade={40000}>
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
                                <div>
                                    <ConditionalButton showGreenImage={inputValueKey.toUpperCase()=="SUPERNOVA"} link={"/waitingRoom1"}/>
                                </div>
                            </div>
                        </FadeIn>
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