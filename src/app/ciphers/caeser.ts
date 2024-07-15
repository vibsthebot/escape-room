const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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