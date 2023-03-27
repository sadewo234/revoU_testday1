let blackpink = [
    ["Jennie", 26, "B"],
    ["Rose", 25, "B"],
    ["Jisoo", 27, "A"],
    ["Lisa", 25, "O"],
]

function averageAndOldest(data) {
    let blekpink = []
    let umurTotal = 0
    let umurTua = 0
    let memberTua = 0
    for(let i=0; i<blackpink.length; i++) {
        umurTotal += blackpink[i][1]
        if(blackpink[i][1] > umurTua) {
            umurTua = blackpink[i][1]
            memberTua = i
        }
    }
    blekpink.push(umurTotal/blackpink.length)
    blekpink.push(blackpink[memberTua])
    return blekpink
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