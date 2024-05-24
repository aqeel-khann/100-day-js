//Find the avg of given numbers in array

//with methods


// function caculateAvg(arr) {
//     sum = arr.reduce((acc, currval) => (acc + currval), 0)
//     avg=sum/arr.length

//     return avg
// }

// console.log(caculateAvg([1, 2, 3, 4, 5]));



// without methods

function caculateAvg(arr) {
    let sum=0
     for (let i = 0; i < arr.length; i++) {
         sum=sum+ arr[i]   
    }
    
    let avg = sum / arr.length
    return avg
    
}
console.log(caculateAvg([1,2,3,4,5]));



