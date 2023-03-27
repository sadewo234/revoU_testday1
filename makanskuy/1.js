function mergeOrder(data) {
    // write your code here
    let hasil =[]
    for(i =0 ; i < data.length; i++){
        let  temp =[]
        for (j=0;j<data[i].orders.length;j++){
            for (k = 0; k<data[i].orders[j].length;k++){
                temp.push(data[i].orders[j][k])
            }
        }
        hasil.push(temp)
    }
    return hasil
  }

//   console.log(
//     mergeOrder([
//       {
//         restaurant: "MekDun",
//         orders: [
//           ["Burger", 200],
//           ["Kentang", 130],
//           ["CocaCola", 400],
//           ["IceCream", 186],
//         ],
//         reviewers: 140,
//       },
//       {
//         restaurant: "Lawmore",
//         orders: [
//           ["Ayam", 126],
//           ["CocaCola", 206],
//           ["Burger", 368],
//           ["IceCream", 80],
//         ],
//         reviewers: 260,
//       },
//       {
//         restaurant: "Burger Queen",
//         orders: [
//           ["Ayam", 85],
//           ["CocaCola", 150],
//           ["Burger", 450],
//           ["Kentang", 20],
//         ],
//         reviewers: 80,
//       },
//     ])
//   );

//   /*
//   [
//    [
//      'Burger',   200,
//      'Kentang',  130,
//      'CocaCola', 400,
//      'IceCream', 186
//    ],
//    [
//      'Ayam',     126,
//      'CocaCola', 206,
//      'Burger',   368,
//      'IceCream', 80
//    ],
//    [ 'Ayam', 85, 'CocaCola', 150, 'Burger', 450, 'Kentang', 20 ],
//   ]
//   */

  function calculateTotalSales(data) {
    let priceList = [
      { name: "Burger", price: 25000 },
      { name: "Kentang", price: 1000 },
      { name: "Ayam", price: 17000 },
      { name: "CocaCola", price: 7000 },
      { name: "IceCream", price: 3000 },
    ];
    // Your code here
    let input = mergeOrder(data)
    let hasil = []
    let total = 0

    for (let i = 0 ; i<input.length ; i++){
        for(let j=0 ; j<input[i].length ; j++){
            for (k = 0; k< priceList.length;k++){
                if(input[i][j] === priceList[k].name){
                    total += priceList[k].price * input [i][j+1]
                }
        }
    }
    hasil.push(total)
    total = 0
  }
  return hasil
  }
//   console.log(
//     calculateTotalSales(
//         [
//             {
//               restaurant: "MekDun",
//               orders: [
//                 ["Burger", 200],
//                 ["Kentang", 130],
//                 ["CocaCola", 400],
//                 ["IceCream", 186],
//               ],
//               reviewers: 140,
//             },
//             {
//               restaurant: "Lawmore",
//               orders: [
//                 ["Ayam", 126],
//                 ["CocaCola", 206],
//                 ["Burger", 368],
//                 ["IceCream", 80],
//               ],
//               reviewers: 260,
//             },
//             {
//               restaurant: "Burger Queen",
//               orders: [
//                 ["Ayam", 85],
//                 ["CocaCola", 150],
//                 ["Burger", 450],
//                 ["Kentang", 20],
//               ],
//               reviewers: 80,
//             },
//           ])
//   );
//   // [ 8488000, 13024000, 13765000 ]

function calculateTotalVote(data) {
    // Your code here
    let hasil = []
    let pointAwal = 25
    let pointAkhir = 0
    for(let i=0 ; i< data.length;i++){
        pointAkhir += (data[i].reviewers * pointAwal) / 100
        hasil.push(pointAkhir)
        pointAkhir = 0
    }
    return hasil 
  }
  
//   console.log(
//     calculateTotalVote([
//       {
//         restaurant: "MekDun",
//         orders: [
//           ["Burger", 200],
//           ["Kentang", 130],
//           ["CocaCola", 400],
//           ["IceCream", 186],
//         ],
//         reviewers: 140,
//       },
//       {
//         restaurant: "Lawmore",
//         orders: [
//           ["Ayam", 126],
//           ["CocaCola", 206],
//           ["Burger", 368],
//           ["IceCream", 80],
//         ],
//         reviewers: 260,
//       },
//       {
//         restaurant: "Burger Queen",
//         orders: [
//           ["Ayam", 85],
//           ["CocaCola", 150],
//           ["Burger", 450],
//           ["Kentang", 20],
//         ],
//         reviewers: 80,
//       },
//     ])
//   );
//   // [ 35, 65, 20 ]

function makanSkuy(data) {
    // Your code here
    if (!data){
        return 'Invalid Data!'
    } 
    if (data.length === 0){
        return 'Tidak ada order, order dulu ngab!'
    }
const coba = calculateTotalSales(data)
const cobaAja = calculateTotalVote (data)

let hasil = {}

for ( let i = 0 ; i < coba.length ; i++){
    
    if (coba[i] > 20000000 && cobaAja[i]>100){
        if(!hasil['ThreeStar']){
            hasil['ThreeStar']=[]
        }
       
        hasil['ThreeStars'].push(data[i].restaurant)
         } else if (coba[i]>=10000000 && cobaAja[i] >= 50){
            if(!hasil['TwoStars']){
                hasil['TwoStars']=[]
         }
         hasil['TwoStars'].push(data[i].restaurant)
         } else {
            if(!hasil['OneStar']){
                hasil['OneStar']=[]
         }
         hasil['OneStars'].push(data[i].restaurant)

         }

        }

return hasil

  }
  
  console.log(makanSkuy()); // Invalid Data!
  console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!
  
  console.log(
    makanSkuy([
      {
        restaurant: "MekDun",
        orders: [
          ["Burger", 200],
          ["Kentang", 130],
          ["CocaCola", 400],
          ["IceCream", 186],
        ],
        reviewers: 140,
      },
      {
        restaurant: "Lawmore",
        orders: [
          ["Ayam", 126],
          ["CocaCola", 206],
          ["Burger", 368],
          ["IceCream", 80],
        ],
        reviewers: 260,
      },
      {
        restaurant : "Karl Sr",
        orders: [
          ["Ayam", 65],
          ["CocaCola", 510],
          ["Burger", 699],
          ["Kentang", 274],
        ],
        reviewers: 412
      },
    ])
  );
  /*
  {
    OneStar: [ 'MekDun' ],
    TwoStars: [ 'Lawmore' ],
    ThreeStars: [ 'Karl Sr' ]
  }
  */