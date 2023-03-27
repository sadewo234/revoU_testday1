function tugas22 (){
let kalimat = `Saya ingin belajar bersama`
console.log(kalimat);

console.log(`================`);

console.log(kalimat.split(` `).forEach(function(item,index){
console.log(`item : ${item} index ke ${index}`);
}));


// console.log(`========================`);

// kalimat.forEach(function(item,index,array){
//     console.log(item);
//     console.log(index);
//     console.log(array);
//     })


}
tugas22()