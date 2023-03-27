function mergeOrder(data) {
    // write your code here
    let result = [];
  
    for (let i = 0; i < data.length; i++) {
      const orders = data[i].orders;
      let temp = [];
  
      for (let j = 0; j < orders.length; j++) {
        temp.push(orders[j][0]);
        temp.push(orders[j][1]);
      }
      result.push(temp);
    }
  
    return result;
  }
  
  // console.log(
  //   mergeOrder([
  //     {
  //       restaurant: "MekDun",
  //       orders: [
  //         ["Burger", 200],
  //         ["Kentang", 130],
  //         ["CocaCola", 400],
  //         ["IceCream", 186],
  //       ],
  //       reviewers: 140,
  //     },
  //     {
  //       restaurant: "Lawmore",
  //       orders: [
  //         ["Ayam", 126],
  //         ["CocaCola", 206],
  //         ["Burger", 368],
  //         ["IceCream", 80],
  //       ],
  //       reviewers: 260,
  //     },
  //     {
  //       restaurant: "Burger Queen",
  //       orders: [
  //         ["Ayam", 85],
  //         ["CocaCola", 150],
  //         ["Burger", 450],
  //         ["Kentang", 20],
  //       ],
  //       reviewers: 80,
  //     },
  //   ])
  // );
  
  /*
  [
   [
     'Burger',   200,
     'Kentang',  130,
     'CocaCola', 400,
     'IceCream', 186
   ],
   [
     'Ayam',     126,
     'CocaCola', 206,
     'Burger',   368,
     'IceCream', 80
   ],
   [ 'Ayam', 85, 'CocaCola', 150, 'Burger', 450, 'Kentang', 20 ],
  ]
  */
  
  // ----------------------------------------------------------------------------
  
  function calculateTotalSales(data) {
    let priceList = [
      { name: "Burger", price: 25000 },
      { name: "Kentang", price: 1000 },
      { name: "Ayam", price: 17000 },
      { name: "CocaCola", price: 7000 },
      { name: "IceCream", price: 3000 },
    ];
    // Your code here
    let result = [];
  
    for (let i = 0; i < data.length; i++) {
      let totalProfit = 0;
  
      for (let j = 0; j < data[i].length; j += 2) {
        const menu = data[i][j]; // 'Burger'
        const qty = data[i][j + 1]; // 200
  
        for (let k = 0; k < priceList.length; k++) {
          // priceList[k] = { name: "Burger", price: 25000 }
          // priceList[k].name = 'Burger'
          if (menu === priceList[k].name) {
            totalProfit += priceList[k].price * qty;
            break;
          }
        }
      }
      result.push(totalProfit);
    }
  
    return result;
  }
  
  // console.log(
  //   calculateTotalSales([
  //     ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
  //     ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
  //     ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
  //   ])
  // );
  // [ 8488000, 13024000, 13765000 ]
  
  // ----------------------------------------------------------------------------
  
  function calculateTotalVote(data) {
    // Your code here
    let result = [];
  
    for (let i = 0; i < data.length; i++) {
      const reviewers = data[i].reviewers;
      const totalVote = (reviewers * 25) / 100;
  
      result.push(totalVote);
    }
  
    return result;
  }
  
  // console.log(
  //   calculateTotalVote([
  //     {
  //       restaurant: "MekDun",
  //       orders: [
  //         ["Burger", 200],
  //         ["Kentang", 130],
  //         ["CocaCola", 400],
  //         ["IceCream", 186],
  //       ],
  //       reviewers: 140,
  //     },
  //     {
  //       restaurant: "Lawmore",
  //       orders: [
  //         ["Ayam", 126],
  //         ["CocaCola", 206],
  //         ["Burger", 368],
  //         ["IceCream", 80],
  //       ],
  //       reviewers: 260,
  //     },
  //     {
  //       restaurant: "Burger Queen",
  //       orders: [
  //         ["Ayam", 85],
  //         ["CocaCola", 150],
  //         ["Burger", 450],
  //         ["Kentang", 20],
  //       ],
  //       reviewers: 80,
  //     },
  //   ])
  // );
  // [ 35, 65, 20 ]
  
  // ----------------------------------------------------------------------------
  
  function makanSkuy(data) {
    // Your code here
  
    if (!data) {
      return "Invalid Data!";
    }
  
    if (data.length === 0) {
      return "Tidak ada order, order dulu ngab!";
    }
  
    const mergeOrderResult = mergeOrder(data);
    const totalSales = calculateTotalSales(mergeOrderResult);
    const totalVote = calculateTotalVote(data);
  
    let result = {};
  
    for (let i = 0; i < totalSales.length; i++) {
      const restaurant = data[i].restaurant;
      const sales = totalSales[i];
      const votes = totalVote[i];
      let rating;
  
      if (sales > 20_000_000 && votes > 100) {
        rating = "ThreeStars";
      } else if (
        sales >= 10_000_000 &&
        sales <= 20_000_000 &&
        votes >= 50 &&
        votes <= 100
      ) {
        rating = "TwoStars";
      } else if (
        sales >= 5_000_000 &&
        sales <= 9_999_999 &&
        votes >= 25 &&
        votes <= 49
      ) {
        rating = "OneHalfStar";
      } else {
        rating = "OneStar";
      }
      // In makanSkuy function you can add new criteria that once the total sales between 5.000.000 - 9.999.999 and the total vote 25-49 the category is OneHalfStar
      if (result[rating] === undefined) {
        result[rating] = [];
      }
  
      result[rating].push(restaurant);
    }
  
    return result;
  
    // {
    //   OneStar: [ 'MekDun' ],
    //   TwoStars: [ 'Lawmore' ],
    //   ThreeStars: [ 'Karl Sr' ]
    // }
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
        restaurant: "Karl Sr",
        orders: [
          ["Ayam", 65],
          ["CocaCola", 510],
          ["Burger", 699],
          ["Kentang", 274],
        ],
        reviewers: 412,
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
          ["Ayam", 326],
          ["CocaCola", 306],
          ["Burger", 468],
          ["IceCream", 280],
        ],
        reviewers: 460,
      },
      {
        restaurant: "Burger Queen",
        orders: [
          ["Ayam", 85],
          ["CocaCola", 150],
          ["Burger", 450],
          ["Kentang", 20],
        ],
        reviewers: 80,
      },
      {
        restaurant: "Pendys",
        orders: [
          ["Ayam", 580],
          ["CocaCola", 246],
          ["Burger", 366],
          ["Kentang", 290],
        ],
        reviewers: 432,
      },
      {
        restaurant: "Karl Sr",
        orders: [
          ["Ayam", 65],
          ["CocaCola", 510],
          ["Burger", 699],
          ["Kentang", 274],
        ],
        reviewers: 412,
      },
    ])
  );
  
  /*
  {
    OneStar: [ 'MekDun', 'Burger Queen' ],
    ThreeStars: [ 'Lawmore', 'Pendys', 'Karl Sr' ]
  }
  */
  