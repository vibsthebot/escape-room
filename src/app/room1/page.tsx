"use client"

import { useState, useEffect } from "react";
import TypewriterEffect from "../ui/typewriter"

export default function Page(){
    const [text, setText] = useState('');

    useEffect(() => {
        const localStorageText = window.localStorage.getItem('name');
        if (localStorageText) {
        setText(localStorageText);
        }
    }, []);

    return (
        <main className="p-11 flex">
            <div className="basis-1/3"></div>
            <div className="basis-1/3">
                <ul>

                    <li className="pb-11">
                        {<TypewriterEffect text={atbashEncrypt("Hi " + text+ ", I'm By the way: The quick brown fox jumps over the lazy dog")} />}
                    </li>
                    <li>
                        {<TypewriterEffect text={atbashEncrypt("Hi " + text+ ", By the way: The quick brown fox jumps over the lazy dog")} font="Wingdings" />}
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
            console.log(message)
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