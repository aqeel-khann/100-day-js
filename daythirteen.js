//check how many vowels in the given string

function countVowels(str) {
    let count=0
   if (str.length === 0) {
     console.log("pass the value");
   } else {
       str=str.toLowerCase()
       let arr = ["a", "e", "i", "o", "u"];
       for (let i = 0; i < str.length; i++) {
           
            if (arr.includes(str[i])) {
                count=count+1
            }
    }
     
    }
    return count
}

console.log(countVowels("hello world")); //3
console.log(countVowels("adnan")); //2

// console.log(countVowels(""));