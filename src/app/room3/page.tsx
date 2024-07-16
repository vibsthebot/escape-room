"use client"

import { useState, useEffect } from "react";
import TypewriterEffect from "../ui/typewriter"
import ConditionalImage from "../ui/lock"
import ConditionalButton from "../ui/conditionalButton";
import Image from 'next/image'

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
                <Image src={"/stickynotes.png"} width={300} height={300} alt="Sticknotes: 11111000000"/>
            </div>
            <div className="basis-1/3">
                <ul>
                    <li>
                        {<TypewriterEffect text={ceaserEncript("23", "Dear " + text+ ", This ship has had a major engine malfunction. You are caught within the gravity of Planet WASP-12b, and your ship will spiral and crash into it. Your only hope for survival is the hidden escape pod accessible in the hallway adjacent to the command module. In order to override  the ship’s emergency lockdown, you must input the code word “Supernova”. By the way: The quick brown fox jumps over the lazy dog")} font="Wingdings" />}
                    </li>
                    <li className="fixed w-1/3 bottom-5">
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
                                <ConditionalButton showGreenImage={inputValueKey.toUpperCase()=="SUPERNOVA"} link={"/room3"}/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="basis-1/3"></div>
        </main>
    );
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function ceaserEncript(key: string, plaintext: string): string {
    if (key == "undefined") key = "0";
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        const charCode = char.charCodeAt(0)
        if (alphabet.includes(char)){
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex + parseFloat(key)) % 26;
            result += alphabet[newIndex];
        }
        else result+=plaintext[i]
      }
      return result;

}

function ceaserDecript(key: string, plaintext: string): string {
    if (key == "undefined") key = "0";
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        const charCode = char.charCodeAt(0)
        if (alphabet.includes(char)){
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex - parseFloat(key)) % 26;
            result += alphabet[newIndex];
        }
        else result+=plaintext[i]
      }
      return result;

}