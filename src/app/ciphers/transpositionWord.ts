// Function to find the lowest index in a list of numbers
function lowestIndex(list: number[]): number {
    let index = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] < list[index]) {
        index = i;
      }
    }
    list.splice(index, 0, 100); // Add 100 at the lowest index
    return index;
  }
  
  // Function to find the index of a character in a character array
  function findIndex(chars: string, charToFind: string): number {
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === charToFind) return i;
    }
    // You can throw a custom error here if needed (e.g., new Error("..."))
    return -1; // Or return -1 to indicate not found
  }
  
  // Function to perform transposition encryption/decryption
  function transpose(plaintext: string, keyString: string, isEncrypt: boolean): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = alphabet.split("");
    const key = keyString.toUpperCase().split("");
    const keyIndices = key.map((char) => findIndex(alphabet, char));
  
    // Create matrices for transposition
    const numCols = Math.ceil(plaintext.length / key.length);
    let firstMatrix: string[][] = [];
    let finalMatrix: string[][] = [];
    let finalArray: string[] = [];
  
    if (isEncrypt) {
      // Create first matrix by filling rows
      firstMatrix = new Array(numCols).fill(null).map(() => new Array(key.length).fill('x'));
      let index = 0;
      for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < key.length; j++) {
          if (index >= plaintext.length) {
            break;
          }
          firstMatrix[i][j] = plaintext[index];
          index++;
        }
      }
  
      // Sort columns based on key indices
      finalMatrix = new Array(key.length).fill(null).map(() => new Array(numCols).fill('x'));
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < numCols; j++) {
          finalMatrix[i][j] = firstMatrix[j][keyIndices[i]];
        }
      }
    } else {
      // Decryption (similar logic but reversed order)
      // ... (implement decryption logic here)
    }
  
    // Combine characters from final matrix into a single array
    for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < numCols; j++) {
        finalArray.push(finalMatrix[i][j]);
      }
    }
  
    return finalArray.join(""); // Combine characters into a string
  }
  
  // Example usage
  const plainText = "hello world";
  const key = "encryption";
  const encryptedText = transpose(plainText, key, true);
  console.log("Encrypted text:", encryptedText);