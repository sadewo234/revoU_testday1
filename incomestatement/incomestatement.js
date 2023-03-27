function generateIngredients(ingredientsRaw) {
  let hasil = [];
  temp = {};

  for (let i = 0; i < ingredientsRaw.length; i++) {
    temp.menu = ingredientsRaw[i][0],
      temp.ratio = ingredientsRaw[i][1],
      temp.ingredients = ingredientsRaw[i][2],
      temp.cost = ingredientsRaw[i][3];
    hasil.push(temp);
    temp = {};
  }
  return hasil;
}
const orderHistories = [
    {
      menuItem: "Bakso Spesial",
      price: 20000,
      amount: 260,
    },
    {
      menuItem: "Bakso Spesial",
      price: 20000,
      amount: 12,
    },
    {
      menuItem: "Mie Ayam Combo",
      price: 18000,
      amount: 20,
    },
    {
      menuItem: "Mie Ayam Spesial",
      price: 12000,
      amount: 6,
    },
  ];
console.log(generateIngredients([
    [`Bakso Spesial`, 20, 6, 130000],
    [`Mie Ayam Combo`, 100, 3, 20000],
    [`Mie Ayam Spesial`,500, 5,40000]
]))

function calculateRawCost(ingredientsData) {
  let hasil = [];

  temp = {};

  for (let i = 0; i < ingredientsData.length; i++) {
    temp.menu = ingredientsData[i].menu;
    temp.stock =
      (ingredientsData[i].ingredients * 1000) / ingredientsData[i].ratio;
    temp.investment = ingredientsData[i].cost * ingredientsData[i].ingredients;
    hasil.push(temp);
    temp = {};
  }

  return hasil;
}

//   console.log(calculateRawCost([
//     [`Bakso Spesial`, 20, 6, 130000],
//     [`Mie Ayam Combo`, 100, 3, 20000],
//     [`Mie Ayam Spesial`,500, 5,40000]
// ]))

function calculateROI(costData, ordersData) {
  for (let i = 0; i < costData.length; i++) {
    for (let j = 0; j < ordersData.length; j++) {
      if (costData[i].menu === ordersData[j].menuItem) {
        if (ordersData[j].amount <= costData[i].stock) {
          costData[i].stock -= ordersData[j].amount;
        }
        if (!costData[i].sales) {
          costData[i].sales = 0;
        }
        costData[i].sales += ordersData[j].price * ordersData[j].amount;
        costData[i].profit = costData[i].sales - costData[i].investment;
        costData[i].ROI = `${
          (costData[i].profit / costData[i].investment) * 100
        }`;
      }
    }
  }

  for (let i = 0; i < costData.length; i++) {
    let element = costData[i];
    let num = "";
    let decimal = 0;
    let total = 0;
    for (let j = 0; j < element.ROI.length; j++) {
      if (element.ROI[j] === ".") {
        decimal += 1;
        break;
      } else {
        num += element.ROI[j];
        total++;
      }
    }
    if (decimal > 0) {
      element.ROI =
        num + `.` + element.ROI[total + 1] + element.ROI[total + 1] + "%";
    } else {
      element.ROI = num + ".00%";
    }
  }

  return costData;
}

// const orderHistories = [
//     {
//       "menuItem": "Bakso Spesial",
//       "price": 20000,
//       "amount": 260
//     },
//     {
//       "menuItem": "Bakso Spesial",
//       "price": 20000,
//       "amount": 12
//     },
//     {
//       "menuItem": "Mie Ayam Combo",
//       "price": 18000,
//       "amount": 20
//     },
//     {
//       "menuItem": "Mie Ayam Spesial",
//       "price": 12000,
//       "amount": 6
//     }
// ]

// console.log(calculateROI([
// {
// menu: 'Bakso Spesial',
// stock: 300,
// investment: 780000
// },
// {
// menu: 'Mie Ayam Combo',
// stock: 30,
// investment: 60000
// },
// {
// menu: 'Mie Ayam Spesial',
// stock: 10,
// investment: 200000
// }
// ], orderHistories));

/*
[
{
menu: 'Bakso Spesial',
stock: 28,
investment: 780000,
sales: 5440000,
profit: 4660000,
roi: '597.44%'
},
{
menu: 'Mie Ayam Combo',
stock: 10,
investment: 60000,
sales: 360000,
profit: 300000,
roi: '500.00%'
},
{
menu: 'Mie Ayam Spesial',
stock: 4,
investment: 200000,
sales: 72000,
profit: -128000,
roi: '-64.00%'
}
]
*/

// }
// menu = menu yg terjual
// stock = sisa stock dari menu , stock berkurang sejumlah amount, amount < stock =stock
// sales total uang hasil penjualan hari ini , sales = price * amount jika stock tersedia
// profit = sales - investment
// roi = return dari invesment

// roi = profit / investement * 100%
// roi hasil nya dengan 2 angka di belakang koma

function incomeStatement(rawIngredients, orders) {
  // Your code here
//   if (!incomeStatement) {
//     return "Invalid data";
//   }

//   if (rawIngredients === 0 || orders === 0) {
//     return "Data is empty";
//   }
  let coba1 = generateIngredients(rawIngredients);
  // let coba2 = calculateRawCost(coba1)
  // let coba3 = calculateROI(coba2, orders)

  return coba1;
}

const rawData = [
  ["Bakso Spesial", 20, 6, 130000],
  ["Mie Ayam Combo", 100, 3, 20000],
  ["Mie Ayam Spesial", 500, 5, 40000],
];



// console.log(incomeStatement());
// // Invalid data

// console.log(incomeStatement([], []));
// // Data is empty

// console.log(incomeStatement(rawData, orderHistories));
/*
    [
      {
        menu: 'Bakso Spesial',
        stock: 28,
        investment: 780000,
        sales: 5440000,
        profit: 4660000,
        roi: '597.44%'
      },
      {
        menu: 'Mie Ayam Combo',        
        stock: 10,
        investment: 60000,
        sales: 360000,
        profit: 300000,
        roi: '500.00%'
      },
      {
        menu: 'Mie Ayam Spesial',      
        stock: 4,
        investment: 200000,
        sales: 72000,
        profit: -128000,
        roi: '-64.00%'
      }
    ]
  */
