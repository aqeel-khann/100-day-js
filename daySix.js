//finde wether given string or palendrom or not




// using builtin methods





// function palindromCheck(str) {
//     let reverseString = str.split(" ").reverse().join(" ").toString()
    
//     console.log(reverseString);
//     if (str == reverseString) {
//       return "Plindrom";
//     } else {
//       return "not Plindrome";
//     }
// }
// console.log(palindromCheck("wow"));


// withoout using builtin methods



function checkPalindrom(str) {
    let reverseString=[]
    for (let i = str.length - 1; i >= 0; i--) {
         reverseString.push(str[i])
        
    }
    reverseString = reverseString.join("").toString();
    console.log(reverseString);
        
         
        
    


}
// console.log(checkPalindrom('aqeel'));



