let word = ''
let hasil = []

function ladder(word) {
  for (let i = word.length ; i >0; i--) {
    let temp = [];
    
    for (let j = 0; j < i; j++) {
      temp.push(word[j]);

    }
    hasil.push (temp)
  }
  return hasil;
}

