
// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// const numbers = [1, 2, 3, 4, 5];
// const result = sumArray(numbers);
// console.log(result); // Output: 15


// const reverseString = (someString) => {
//     let reversed = "";
//     for (let i = someString.length - 1; i >= 0; i--) {
//         reversed += someString[i];
//     }
//     return reversed;
// }

// console.log(reverseString("I am a string")); // gnirts a ma I


const truncate = (str, numWords) => {
    const words = str.split(' ');
    const truncatedWords = words.slice(0, numWords);
    const truncatedString = truncatedWords.join(' ');
    return truncatedString;
};

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
