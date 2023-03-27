// "use strict"
// // Array

// /*
// tipe data
// non - primitive / stuctured data - type

// Penamaannya harus jamak / plural
// Data yang di simpan sejenis
// */

// // let data = ['Jennie', 'Jisoo', 'Lisaz']

// // console.log(data[1])
// // console.log(data[2][data[2].length - 1])

// // console.log(data[data.length - 1])

// // ---------------------------------------------

// // let data2 = ['Rose', '80', 'Bandung']

// // data2[0] = 'Lisa'

// // console.log(data2)

// // let str = 'hello'
// // // str[0] = 'y'

// // console.log(str[0] + 'apa')



// // ---------------------------------------------
// // --- ARRAY MUlTIDIMENSI
// // ---------------------------------------------

// // let students = [
// //   ['Jennie', [90, 80, 70, 80], 'Phase 0'],
// //   ['Lisa', [80, 80, 80, 100], 'Phase 1'],
// //   ['Jisoo', [60, 80, 90, 70], 'Phase 1'],
// // ]

// // console.log(students[0][0][0]) // 'J'

// // console.log(students[1])

// // console.log([ 'Lisa', [ 80, 80, 80, 100 ], 'Phase 1' ][0])

// // console.log(students[2][1][3])

// // for(let i = 0; i < students.length; i++) {
// //   // i = 0
// //   // students[i] = [ 'Jennie', [ 90, 80, 70, 80 ], 'Phase 0' ]
// //   // students[i][1] = [ 90, 80, 70, 80 ]

// //   // console.log(students[i][1])

// //   // for(let j = 0; j < students[i][1].length; j++) {
// //   //   console.log(students[i][1][j])
// //   // }
// // }

// let students = [
//   ['Jennie', [90, 80, 70, 80], 'Phase 0'],
//   ['Lisa', [80, 80, 80, 100], 'Phase 1'],
//   ['Jisoo', [60, 80, 90, 70], 'Phase 1'],
// ]

// // ---- CARI RATA-RATA SCORES JISOO
// // let totalScore = 0

// // for(let i = 0; i < students[2][1].length; i++) {
// //   let score = students[2][1][i]

// //   totalScore += score
// // }

// // console.log(totalScore / students[2][1].length)

// // ----- HITUNG RATA2 SCORE SETIAP STUDENT

// // for(let i = 0; i < students.length; i++) {
// //   let scores = students[i][1]
// //   var totalScore = 0

// //   for(let j = 0; j < scores.length; j++) {
// //     let score = scores[j]
// //     totalScore += score
// //   }

// //   console.log(totalScore / scores.length)
// // }

// // ---- HITUNG RATA2 DARI RATA2 NILAI STUDENT
// // let totalAverage = 0

// // for(let i = 0; i < students.length; i++) {
// //   let scores = students[i][1]
// //   var totalScore = 0

// //   for(let j = 0; j < scores.length; j++) {
// //     let score = scores[j]
// //     totalScore += score
// //   }

// //   totalAverage += totalScore / scores.length
// // }

// // console.log(totalAverage / students.length)


// const row = 3
// // [
// //   ['*', '*', '*'],
// //   ['*', '*', '*'],
// //   ['*', '*', '*']
// // ]

// let result = []


// ------------ LECTURE SIANG ---------------

// function namaFunction (param1, param2){
//   if( typeof param1 !== "number"){
//     return 'param1 harus berisi angka'
//   } 
//   if( typeof param2 !== "number") {
//     return 'param2 harus berisi angka'
//   } 

//   return 'uwaw'
// }


// console.log(namaFunction('juminten', 20));
// console.log(namaFunction(20, 'siti'));
// console.log(namaFunction(100, 10100));

// ---------------------array
// let str = 'juminten' // menghilangkan index ganjil pada string
// let output = ''
// for (let i = 0; i < str.length; i++) {
//   let element = str[i];
//   if (i %2 === 0){
//     // output += element
//     output += str[i]
//   }
// }
// console.log(output);

//output: jmne

// const str = 'purwoto'
// output : proo


// array multidimensi

// let arr = [1,2,3,4,5,6,7,8,9]
// let output = []
// let satuRow = []
// let counter = 0

// for ( let i =0 ; i< arr.length; i++){
//     if (counter === 3){
//       output.push(satuRow)
//       satuRow = []
//       counter = 0
//     } 
//       satuRow.push(arr[i])
//       counter++
//     }


// output.push(satuRow)
// console.log(output, "<<<<<<<<<<<<");


//-----------------------
let blackpink = [
  ["Jennie", 26, "B"],
  ["Rose", 25, "B"],
  ["Jisoo", 27, "A"],
  ["Lisa", 25, "O"],
]


function averageAndOldest(data) {
  let result = []
  let age = 0
  let counter = 0
  let max = 0
  let arrayMax = []

  for (let i = 0; i < data.length; i++) {
      age = data[i][1]
      counter += age 
      if(age > max) {
          max = age
          arrayMax = data[i]

      }
  } 
  let average = counter / data.length
  return [average, arrayMax]
}


console.log(averageAndOldest(blackpink));

  
