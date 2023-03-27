// function fill(data, value, start, end) {
//     let i= 0 
//     let j= start
    
//     if(data === undefined || value === undefined){
//         return 'invalid input'
//     } else if(start === undefined && end === undefined) {
//         while(i < data.length){
//             data[i] = value
//             i++
//         }
//     }
//     else {
//         while(j< data.length){
//             data[j] = value
//             if (data[j] === data [end-1]){
//                 break
//             }
//        j++  }
//     } return data
// }
           
  
//   // don't change this code
//   var fs = require("fs");
//   let { data, val, start, end } = JSON.parse(fs.readFileSync(process.stdin.fd, "utf-8").trim());
  
//   console.log(fill(data, val, start, end));



// dpp


// function fill(data, value, start, end) {
//     // Insert your code here
//       if (!data || !value) {
//           return 'Invalid input'
//       }
//       if (!end) {
//           end = data.length
//       }
//       if (!start) {
//           start = 0
//       }
//       while (end < start) {
//           if (data[i]) {
//               data[i] = value
//           }
//           start++
//       }
//       return data
//   }
  
//   //Test Case
//   console.log(fill());
//   // Invalid input
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"]));
//   // Invalid input
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
//   // [ 'Alpha', 'Beta', 'Echo', 'Echo' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3));
//   // [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20));
//   // [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1));
//   // [ 'Golf', 'Beta', 'Charlie', 'Delta' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1));
//   // [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India"));
//   // [ 'India', 'India', 'India', 'India', 'India', 'India' ]

// function fill(data, value, start, end) {
//     // Insert your code here
//       if (!data || !value) {
//           return 'Invalid input'
//       }
//       if (!end) {
//           end = data.length
//       }
//       if (!start) {
//           start = 0
//       }
//       for (i=start; start<end; i++) {
//           if (data[i]) {
//               data[i] = value
//           }
//           start++
//       }
//       return data
//   }
  
//   //Test Case
//   console.log(fill());
//   // Invalid input
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"]));
//   // Invalid input
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
//   // [ 'Alpha', 'Beta', 'Echo', 'Echo' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3));
//   // [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20));
//   // [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1));
//   // [ 'Golf', 'Beta', 'Charlie', 'Delta' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1));
//   // [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]
//   console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India"));
//   // [ 'India', 'India', 'India', 'India', 'India', 'India' ]




function Ganjil (arr) {
    let hasil = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1 && arr[i] % 3 !== 0) {
            hasil.push(arr[i])
        }
    }
    return hasil
}

function Genap (arr) {
    let hasil = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
            hasil.push(arr[i])
        }
    }
    return hasil
}

function PembagianTiga (arr) {
    let hasil = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0) {
            hasil.push(arr[i])
        }
    }
    return hasil
}

function mengelompokkanAngka (arr) {
    let hasil = []

    let hasilGenap = Genap(arr)
    let hasilGanjil = Ganjil(arr)
    let hasilPembagianTiga = PembagianTiga(arr)

    hasil.push(hasilGenap, hasilGanjil, hasilPembagianTiga)



    return hasil
}
//do not change the code below
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
let inputArr = input[0] ? JSON.parse(input[0]) : [];
console.log(mengelompokkanAngka(inputArr));