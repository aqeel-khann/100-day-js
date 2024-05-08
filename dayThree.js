//This function show how many time a alphabet appear in a string


//with Case INsencitive

// function charCount(string,char) {
//     let lower=string.toLowerCase()
//     let count=0;
//     for (let i = 0; i < lower.length; i++) {
         
//         if (lower[i]===char) {
//             count++
//         }
        
//     }
//     return count
// }

// console.log(charCount('aqeEeeEl','e'));


// With Case Sensitive



// function charCount(string,char) {
//      
//     let count=0;
//     for (let i = 0; i < string.length; i++) {
         
//         if (string[i]===char) {
//             count++
//         }
        
//     }
//     return count
// }

// console.log(charCount('aqeEeeEl','e'));



//by using methods


function charCount(string,char) {
    let lower=string.toLowerCase().split('')
    console.log(lower);
    let totalOcuuring=lower.reduce((acc,currval)=>
        {
            if (currval===char) {
                acc++
            }
            return acc

    },0 )
    return totalOcuuring


     
}

console.log(charCount('aqeEeeEl','e'));