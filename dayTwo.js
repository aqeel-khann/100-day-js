function  genrateHashFunction(string) {
    if (string.length>40 || string.trim().length===0) {
        return false
    }
    let newArray=[]
    let word=string.toUpperCase()
    let wordArray=word.split(' ')
    for (let i = 0; i < wordArray.length; i++) {
         if (wordArray[i]==='') {
            break
         }
        else{
            newArray.push(wordArray[i])
        }
    }
    newArray.unshift('#')
    word=newArray.join('').toString()

    return word


    
   
     
}

let genratHashWord=genrateHashFunction('my name is muhmmad aqeel')

console.log(genratHashWord);