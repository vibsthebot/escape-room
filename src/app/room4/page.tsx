"use client"

import { useState, useEffect } from "react";
import ConditionalButton from "../ui/conditionalButton";
import ConditionalImage from "../ui/lock";
import TypewriterEffect from "../ui/typewriter";

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
            </div>
            <div className="basis-1/3">
                <ul>
                    <li>
                    <TypewriterEffect text={vigenereEncript("key", "message")}/>
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
                                <ConditionalButton showGreenImage={inputValueKey.toUpperCase()=="SUPERNOVA"} link={"/finish"}/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="basis-1/3"></div>
        </main>
    )
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function vigenereEncript(key: string, text: string): string {
    text = text.toUpperCase()
    key = key.toUpperCase()
    let result: string = ""
    let indexOfKey: number = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)){
            if (indexOfKey>=key.length){
                indexOfKey = 0
            }
            const keyNumber = alphabet.indexOf((key[indexOfKey]))
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex + keyNumber) % 26
            result += alphabet[newIndex]
            indexOfKey+=1
        }
        else result+=char
      }
      return result;
}
function vigenereDecript(key: string, text: string): string {
    text = text.toUpperCase()
    key = key.toUpperCase()
    let result: string = ""
    let indexOfKey: number = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)){
            if (indexOfKey>=key.length){
                indexOfKey = 0
            }
            const keyNumber = alphabet.indexOf((key[indexOfKey]))
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex - keyNumber + 26) % 26;
            result += alphabet[newIndex]
            indexOfKey+=1
        }
        else result+=char
      }
      console.log('Decrypted:', result)
      return result
}