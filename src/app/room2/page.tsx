"use client"

import { useState, useEffect } from "react"
import TypewriterEffect from "../ui/typewriter"
import ConditionalImage from "../ui/lock"
import ConditionalButton from "../ui/conditionalButton"
import Image from 'next/image'
import FadeIn from "../ui/fadeIn"
import Timer from "../ui/timer"

export default function Page(){
    const [text, setText] = useState('')
    const [inputValueKey, setInputValueKey] = useState<string>('')
    useEffect(() => {
        const localStorageText = window.localStorage.getItem('name')
        if (localStorageText) {
        setText(localStorageText)
        }
        console.log()
    }, [])
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        if (submitted) setSubmitted(false)
        else setSubmitted(true)
    }

    return (
        <main className="p-11 flex">
            <div className="basis-1/4">
                <Image src={"/stickynotes.png"} width={300} height={300} alt="Sticknotes: 11111000000"/>
            </div>
            <div className="basis-1/2">
                <ul>
                    <li>
                        {<TypewriterEffect text={ceaserEncript("1984", text + "--As you have now decrypted this second message, I think it’s safe to explain what is really happening. The engine didn’t malfunction by accident. The cargo you were tasked with transporting on the S.S. Syntar is the remains of biological weapons experiments violating several intergalactic treaties. The Stellar Union Intelligence Agency plans to dispose of this evidence by crashing it into WASP-12b, an uncolonized and uninhabited planet. I work for the SUIA, and felt guilty for sending you to die unnecessarily. I have left a secret escape pod in the hallway between the command module and airlock. I had to leave several layers of security measures in order to pass inspections from the SUIA. If you are able to eject the escape pod, its significantly lower mass will allow you to escape WASP-12b’s gravity and survive. I am confident that you can bypass the security measures before the Syntar crashes." )} font="Wingdings" />}
                    </li>
                    <li className="fixed w-1/2 bottom-5">
                        <FadeIn waitBeforeFade={40000}>
                        <div className="self-start flex flex-col items-center justify-center">
                            <ConditionalImage showGreenImage={inputValueKey.toUpperCase()=="HALLWAY"}/>
                            <div className="pt-5"></div>
                            <input
                                id="Key"
                                type="text"
                                placeholder="Where do you head next? (One word)"
                                value = {inputValueKey}
                                onChange = {(event) => setInputValueKey(event.target.value)}
                                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <div className="pt-5"></div>
                            <div>
                                <ConditionalButton showGreenImage={inputValueKey.toUpperCase()=="HALLWAY"} link={"/waitingRoom2"}/>
                            </div>
                        </div>
                        </FadeIn>
                    </li>
                </ul>
            </div>
            <div className="basis-1/4">
                <Timer/>
                <div className="fixed bottom-5 right-5">
                    {submitted && <Image src = {"/wingdingsalphabet.png"} width={200} height={200} alt="Wingidngs alphabet" className="pb-11"/>}
                    <button onClick={handleSubmit} className="fixed bottom-2 right-2 px-5 py-2 bg-cyan-50 hover:bg-cyan-500 rounded-full">Hint</button>
                </div>
            </div>
        </main>
    )
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function ceaserEncript(key: string, plaintext: string): string {
    if (key == "undefined") key = "0"
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i]
        const charCode = char.charCodeAt(0)
        if (alphabet.includes(char)){
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex + parseFloat(key)) % 26
            result += alphabet[newIndex]
        }
        else result+=plaintext[i]
      }
      return result

}