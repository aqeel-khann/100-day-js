function sumOfDigit(str) {
//     let myStr = str.toString().split("").map(Number).reduce((acc, curval) => acc + curval, 0)
    //    return myStr
    let sum = 0
    while (str) {
        sum += str % 10
        str=Math.floor(str/10)
    }
    return sum
}
console.log(sumOfDigit(123));
