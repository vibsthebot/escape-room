const polybiusAlphabet = [["A", "B", "C", "D", "E"], ["F", "G", "H", "I", "K"], ["L", "M", "N", "O", "P"], ["Q", "R", "S", "T", "U"], ["V", "W", "X", "Y", "Z"]]
const numbers = "12345"

function findIndexInMatrix(target: any): number[] | null {
    for (let rowIndex = 0; rowIndex < polybiusAlphabet.length; rowIndex++) {
        for (let colIndex = 0; colIndex < polybiusAlphabet[rowIndex].length; colIndex++) {
            if (polybiusAlphabet[rowIndex][colIndex] === target) {
            return [rowIndex+1, colIndex+1];
            }
        }
    }
    return null;
}

function filterChars(str: string): string {
    const regex = new RegExp(`[^${numbers.split("").join("")}]`, "g");
    return str.replace(regex, "");
}

function polybiusEncrypt(text: string){
    text = text.toUpperCase()
    if (text.includes("J")){
        text = text.split("J").join("I")
    }
    const result = []
    for (let i = 0; i < text.length; i++){
        let curChar = text[i]
        let indexInMatrix = findIndexInMatrix(curChar)
        if (indexInMatrix != null){
            result.push(indexInMatrix[0]+indexInMatrix[1]+" ")
        }
        else {
            result.push(curChar + " ")
        }
    }
}

function polybiusDecrypt(text: string){
    let textLen = filterChars(text).length
    if (textLen % 2 != 0) return 
    const result = []
    for (let i = 0; i < text.length; i++){
        if (numbers.includes(text[i])){
            result.push(polybiusAlphabet[i][i+1])
            i++
        }
        else {
            result.push(text[i])
        }
    }
}

