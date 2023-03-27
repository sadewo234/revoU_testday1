let blackpink = [
    ["Jennie", 26, "B"],
    ["Rose", 25, "B"],
    ["Jisoo", 27, "A"],
    ["Lisa", 25, "O"],
]
let total = 0
let average
let oldest = 0
let output = []
let oldestIndex = 0

function averageAndOldest(data) {
    // average
    for (let i = 0; i < blackpink.length; i++){
        total += blackpink[i][1]
    }
    // oldest
    for (let j = 0; j < blackpink.length; j++){
        if(blackpink[j][1] > oldest){
            oldest = blackpink[j][1]
            oldestIndex = blackpink[j]
        }
    }
    average = total / blackpink.length
    output.push(average)
    output.push(oldestIndex)
    return output
    
}


console.log(averageAndOldest(blackpink));
/**
 * buat function
 * output: 
 * [
 *  25.75, // average age
 *  ["Jisoo", 27, "A"] // oldest
 * ] 
 */