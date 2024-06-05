//check how many vowels in the given string

function countVowels(str) {
    let count=0
   if (str.length === 0) {
     console.log("pass the value");
   } else {
       str.toLowerCase()
       let newStr = str.split("");
       let arr = ["a", "e", "i", "o", "u"];
       for (let i = 0; i < arr.length; i++) {
           
           if (arr[i].includes(newStr)) {
               count++
        
       }
       }
     
    }
    
    return count

}

console.log(countVowels("hello world"));
// console.log(countVowels(""));