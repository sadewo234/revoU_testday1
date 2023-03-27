let board = ['ads23ada434sdrwe']
let jumlahVokal = []
let result = []

function vocalSeeker(board) {
  for (let i = 0 ; i< board.length; i++){
   let temp = []
   
    if (typeof board [i] !== 'number'){
        temp.push (board[i])
       
   }
   result.push(temp)
        
 }
  return result
}
console.log(vocalSeeker(board));



// if(board[i] === ['A','I','U','E','O','a','i','u','e','o'])