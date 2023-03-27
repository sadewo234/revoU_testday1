function getAnimals(arr) {
    // Write your code here

    let hasil = []
   
 
    for (let i =0 ; i<arr.length ; i++){
      let temp = ''
      let type = arr [i] [arr[i].length - 1]
    for (let j= 0 ; j<arr[i].length-2;j++){
   temp+= arr[i][j]
    
} let position = 0
if (type === 'H'){
  position = 1
}else if (type === 'O'){
  position=2
}
if(!hasil[position] || hasil[position].length < arr[i].length-2){
  hasil [position] = temp
}
// return temp
}
return hasil
}
//Test Case 

console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']))
// [ 'Singa','Kuda','Monyet' ]

console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
  // [ 'Harimau', 'Perkutut', 'Beruang' ]