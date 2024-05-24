//find either given arrays are equal or not



// using build in method

function checkArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        
       return false 
    }
      return arr1.every((value, index) => value === arr2[index]); //it will give either true or false


}
console.log(checkArray([1,2,3],[1,2,3]));











// without built in mehthod

// function equalArray(arr1, arr2) {
// if (arr1.length==arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//          if (arr1[i]!=arr2[i]) {
//            return console.log('Given Arrays are not equal ');
//         }  
//     }
// }
// console.log('Given Arrays are equal');
   
// }

// console.log(equalArray([1,1,3],[1,2,3]));