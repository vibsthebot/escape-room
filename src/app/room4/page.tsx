"use client"

import { useState, useEffect } from "react";
import ConditionalButton from "../ui/conditionalButton";
import ConditionalImage from "../ui/lock";
import TypewriterEffect from "../ui/typewriter";
import FadeIn from "../ui/fadeIn";
import Image from 'next/image'
import Timer from "../ui/timer";

export default function Page(){
    const [text, setText] = useState('');
    const [inputValueKey, setInputValueKey] = useState<string>('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localStorageText = window.localStorage.getItem('name');
            if (localStorageText) {
                setText(localStorageText);
            }
            console.log()
        }
    }, []);

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        if (submitted) setSubmitted(false)
        else setSubmitted(true)
    }
    let localStorageText
    if (typeof window !== 'undefined') {
        localStorageText = window.localStorage.getItem('name');
    }
    if (localStorageText == null) localStorageText = ""
    return (
        <main className="p-11 flex">
            <div className="basis-1/3"></div>
            <div className="basis-1/3">
                <ul>
                    <li>
                    <TypewriterEffect text={"The panel flips back around, and a portion of the wall slides away to reveal a 6-foot tall egg-shaped capsule with a door. You enter it, and see a small screen with a prompt stating “INPUT ENCRYPTED IDENTIFICATION”. You are still holding the note from before."}/>
                    </li>
                    <li>
                        <FadeIn waitBeforeFade={20000}>
                        <div className="relative">
                            <Image className= "w-full h-full object-cover" src = {"/slip-of-paper.png"} width={250} height={250} alt="Slip of paper"/>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm font-bold">124234111413114344<br /> <br />clé pour échapper au module</div>
                        </div>
                        </FadeIn>
                    </li>
                    <li className="fixed w-1/3 bottom-5">
                        <FadeIn waitBeforeFade={20000}>
                        <div className="self-start flex flex-col items-center justify-center">
                            <ConditionalImage showGreenImage={inputValueKey.toUpperCase()==vigenereEncript("Brodcast", localStorageText.toUpperCase())}/>
                            <div className="pt-5"></div>
                            <input
                                id="Key"
                                type="text"
                                placeholder="Use a certain cipher to encrypt your name"
                                value = {inputValueKey}
                                onChange = {(event) => setInputValueKey(event.target.value)}
                                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <div className="pt-5"></div>
                            <div>
                                <ConditionalButton showGreenImage={inputValueKey.toUpperCase()==vigenereEncript("Broadcast".toUpperCase(), localStorageText.toUpperCase())} link={"/finish"}/>
                            </div>
                        </div>
                        </FadeIn>
                    </li>
                </ul>
            </div>
            <div className="basis-1/3">
                <Timer/>
                <div className="fixed bottom-5 right-5">
                    {submitted && <p>The cipher was named after the wrong person</p>}
                    {submitted && <Image src = {"/polybius-square.png"} width={200} height={200} alt="Wingidngs alphabet" className="pb-11"/>}
                    <button onClick={handleSubmit} className="fixed bottom-2 right-2 px-5 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Hint</button>
                </div>
            </div>
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