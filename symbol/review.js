// function convertSymbol(arr) {
//     //code here
//     let simbol = ')!@#$%^&*('
//     let temp = ''
//     let hasil = []
//     for (let i = 0 ; i<arr.length ; i++){
//        for (let j=0 ; j<arr[i].length ; j++){
//        for(let k= 0 ; k<simbol.length; k++){
//         if (arr[i][j] === simbol[k]){
//             console.log(k);
//             temp += k
//         }
//        }
//        }
//        hasil.push(temp)
//         temp=''
//     }
//     return hasil
//   }
  
//   console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']))

function decrementOdd(arr) {
    //code here
    let hasil = []
    for (let i =0 ; i<arr.length; i ++){
      if(arr[i] %2 !==0 ){
        hasil.push(arr[i]-arr.length)
      } else {
        hasil.push(arr[i])
      }
    }
    return hasil
  }
  
  console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]))