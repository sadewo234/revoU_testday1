/**
 * hitung jumlah dari sebuah deret angka untuk ganjil atau genap
 */

function sum(number, type) {
  let total = 0;
  let index = 1;
  for (let i = 1; i < number; i++) {
    if (type === "genap" && index % 2 === 0) {
      total += i;
    } else if (type === "ganjil" && index % 2 !== 0) {
      total += i;
    }
    index++;
  }
  return total;
}

// 1 + 3 +5 +7 + 9 = 25
// 2  + 4 + 6 + 8 + 10 = 30
// console.log(sum(200000, 'genap')) // 10,000,000,000
console.log(sum(200001, "ganjil")); // 10,000,000,000
// console.log(sum(300000, 'ganjil')) // 22500150000 + 100000000

/*
kesulitan nya apa
1. 

*/
