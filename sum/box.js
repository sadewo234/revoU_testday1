function boxOfAlphabet(row, col) {
    let huruf = ["a", "b", "c", "d", "e", "f", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let result = []
    let counter = 0
    
    for(let i = 0; i < row; i++) {
        let temp = []
        for(let j = 0; j < col; j++){
            temp.push(huruf[counter])
            counter++

            if(counter > huruf.length - 1) {
                counter = 0
            }
        }
        result.push(temp)
    }
    return result
}


console.log(boxOfAlphabet(2, 2))
 /**
  * [
  *  ['a', 'b'],
  *  ['c', 'd']
  * ]
  */
 
 console.log(boxOfAlphabet(3, 4))
 
 /**
  *  [
  *   ['a', 'b', 'c', 'd'],
  *   ['e', 'f', 'g', 'h'],
  *   ['i', 'j', 'k', 'l'],
  * ]
  */
 
 console.log(boxOfAlphabet(6, 5))
 
 /**
  * [
  *   ['a', 'b', 'c', 'd', 'e'],
  *   ['f', 'g', 'h', 'i', 'j'],
  *   ['k', 'l', 'm', 'n', 'o'],
  *   ['p', 'q', 'r', 's', 't'],
  *   ['u', 'v', 'w', 'x', 'y'],
  *   ['z', 'a', 'b', 'c', 'd']
  * ]
  */
