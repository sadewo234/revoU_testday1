function convertSymbol(arr) {
    
    let simbol = ')!@#$%^&*('
    let temp = ''
    let hasil = []
    for(let i = 0 ; i<arr.length;i++){
      
       for(let j=0 ; j<arr[i].length; j++){
       for(let k =0 ; k<simbol.length;k++){
        if(arr[i][j] === simbol[k]){
            temp += k
        
            
        } 
       }
       
       }
       hasil.push(temp)
       temp = ''
    }
    return hasil
  } 
//   console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']))


  function decrementOdd(arr) {
    let hasil = []
  
    for (let i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            hasil.push(arr[i] - arr.length)
        } else {
            hasil.push(arr[i])
        }
            
        } 
        return hasil
    }
    //code here
  


//   console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]))


function splitNumber(arr) {
    //code here
    let temp = []
    let hasil = []

    for (let i=0;i<arr.length;i++){
       if (arr[i] < 27){
        temp.push(arr[i])
       }else{
        hasil.push(temp)
        temp=[]
       }
    }
    hasil.push(temp)
    return hasil
  }
  
//   console.log(splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]))

function convertNumber(arr) {
    //code here
    let hasil= ''
    let abjad = 'abcdefghijklmnopqrstuvwxyz'

    for (let i =0 ; i <arr.length ; i++){

        for (let j = 0  ; j< arr[i].length;j++){

            hasil += abjad [arr [i][j]-1]
            
        }
        hasil += ' '
    }
  return hasil
  } 
  
//   console.log(convertNumber([[9], [12, 15, 22, 5], [25, 15, 21]]))


function result(arr) {
    // Your code here
    let convertS = convertSymbol(arr)
    let dec = decrementOdd(convertS)
    let split = splitNumber(dec)
    let convertN = convertNumber (split)
    console.log(convertN);
  }
  
  console.log(
    result(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^']) // lets go guyz
  )