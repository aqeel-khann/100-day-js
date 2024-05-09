//check according to given sides  , either it is issocels, equalitral or scalene triangle


function  checkTriangleType(side_one,side_two,side_three) {
    if (side_one===side_two && side_two===side_three) {
        return "Triangle is equaliteral"
    }
    else if ((side_one===side_two||side_one===side_three ||side_two===side_three) ) {
        return "Triangle is Issocell"
        
    }
    else{
        return "Triangle is scalene"

    }
}
let triangle=checkTriangleType(3,1,1)
// console.log(triangle);




//finde the second heighest number in given array

// by using method

// function secondHeighest(arr) {
    
//     let sortArray=arr.sort( (a,b)=>a-b ) //in Ascending
    

//     return sortArray[sortArray.length-2]
// }

// let heighestNum=secondHeighest([2,4,6,10,7,9])
// console.log(heighestNum);






//without method

function secondHeighest(arr) {
    
    for (let i = 0; i < arr.length-1; i++) {
        
        for (let j = 0; j < arr.length -1; j++) {  
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        
    }
    return arr
}

let heighestNum=secondHeighest([2,4,6,10,7,9])
console.log(heighestNum);