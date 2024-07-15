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