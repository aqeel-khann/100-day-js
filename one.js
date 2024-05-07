// function findLongestString(string){
//     let longetsword = 0;
//     let word = ""
//     let myStr=string.split(" ")

//     for (let i = 0; i < myStr.length; i++) {
//         let a = myStr[i].length
//         if(a>longetsword){
//             longetsword = myStr[i].length
//             word = myStr[i]
//         }
//     }
//      return {longetsword,word}
// }
// let longestString=findLongestString('my name is Muhammad aqeel')
// console.log(longestString.word, longestString.longetsword);



// 2nd methods

function longestStr(str) {
    if (str.trim().length===0) {
        return false
    }
    let wordArray=str.split(" ")
    //2nd
    //  wordArray=wordArray.sort((a,b)=> b.length-a.length )
    //  return wordArray[0]

    //3rd
    
     return wordArray.reduce( (acc,currval)=> currval.length > acc.length? currval:acc,'' )

    
    

}

let longestWord=longestStr('my Name is Muhammad Aqeel')
console.log(longestWord, longestWord.length);