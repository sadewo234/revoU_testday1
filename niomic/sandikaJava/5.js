const  angka = [1,2,54,6,415,-4,-3,-7,-9,9,5]

// mencari angka >= 3
// MENGGUNAKAN FOR


// const hasil = []
// for (let i = 0 ; i < angka.length ; i++) {
// if ( angka [i] >= 3){
//   hasil.push(angka[i])
// }

// }
// console.log(hasil);

// MENGGUNAKAN FILTER

// const hasil = angka.filter(a => a >= 3)
// console.log(hasil);

// MENGGUNAKAN MAP
// kalikan semua angka dengan 2

// const hasil = angka.map(a=> a *2)
// console.log(hasil);

// MENGGUNAKAN REDUCE
// jumlahkan elemen pada array

// const hasil = angka.reduce ((a,b)=> a+b)
// console.log(hasil);

//METHOD CHAINING

// const hasil = angka.filter(a => a > 5)
// .map(a => a *3)
// .map (a => a/2)
// .reduce((a,b)=> a + b)

// console.log(hasil);