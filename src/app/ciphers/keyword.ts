function keywordEncript(key: string, plaintext: string): string {
    key = key.toUpperCase()
    for (let i = 0; i<26-key.length; i++){
        let j = 0
        while (true){
            if (!key.includes(alphabet[j])){
                key.concat(alphabet[j])
                break
            }
            j++
        }
    }
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (alphabet.includes(char)){
            const charIndex = alphabet.indexOf(char)
            result += key[charIndex];
        }
        else result+=plaintext[i]
      }
      return result;

}
function keywordDecript(key: string, plaintext: string): string {
    key = key.toUpperCase()
    for (let i = 0; i<26-key.length; i++){
        let j = 0
        while (true){
            if (!key.includes(alphabet[j])){
                key.concat(alphabet[j])
                break
            }
            j++
        }
    }
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (alphabet.includes(char)){
            const charIndex = key.indexOf(char)
            result += alphabet[charIndex];
        }
        else result+=plaintext[i]
      }
      return result;
}