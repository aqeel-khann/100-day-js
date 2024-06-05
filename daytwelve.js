//function check and remove duplicates items



//without methods

function checkDuplicates(arr) {
    let newArr=[]
    for (let i = 0; i < arr.length; i++) {
         if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
         }
            
        }
        
        return newArr
    }


// console.log(checkDuplicates([1,2,2,3,4,3,4,6,4,5,6,6,1]));
// console.log(checkDuplicates([1,2,3]));
// console.log(checkDuplicates([]));




//with methods         ###### Set by nature store unique values so..


function removeDuplicate(arr) {
    // let newArr = new Set(arr) //will return in object
    let newArr=[... new Set(arr)]
    

    return newArr
}

console.log(removeDuplicate([1,2,3,4,3,2,1]));