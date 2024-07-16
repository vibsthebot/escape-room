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
                    <TypewriterEffect text={encryptColumnarTransposition("message", "key")}/>
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
    )
}

function encryptColumnarTransposition(plaintext: string, key: string): string {
    if (!plaintext || !key) {
        return "hi"
      }
    const columns: { [key: string]: string[] } = {};
    const key_int_list: number[] = [];
    let x = 0;
    let y = 0;
    let output = '';

    // Process key to determine column order
    for (const char of key) {
      const charCode = char.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        key_int_list.push(charCode - 96);
      } else if (charCode >= 65 && charCode <= 90) {
        key_int_list.push(charCode - 64);
      } else {
        throw new Error('Key must be one word consisting only of letters.');
      }
    }

    // Initialize columns based on key
    for (const num of key_int_list) {
      const columnName = num < 10 ? `column0${num}` : `column${num}`;
      columns[columnName] = [];
    }

    // Assign plaintext characters to columns
    for (const char of plaintext) {
      x = key_int_list[y];
      const columnName = x < 10 ? `column0${x}` : `column${x}`;
      columns[columnName].push(char);
      y = (y + 1) % key_int_list.length;
    }

    // Construct output by reading columns in sorted order
    Object.keys(columns).sort().forEach(columnName => {
      columns[columnName].forEach(char => {
        output += char;
      });
    });

    return output;
  };