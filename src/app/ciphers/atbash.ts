const backAlphabet = "ZXWVUTSRQPONMLKJIHGFEDCBA"

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