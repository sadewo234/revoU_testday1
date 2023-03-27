function generateIngredients(ingredientsRaw) {
  // Your code here
  const result = []

  for(let i = 0; i < ingredientsRaw.length; i++) {
    const obj = {
      menu: ingredientsRaw[i][0],
      ratio: ingredientsRaw[i][1],
      ingredients: ingredientsRaw[i][2],
      cost: ingredientsRaw[i][3]
    }

    result.push(obj)
  }

  return result
}

// console.log(generateIngredients([
//   ["Bakso Spesial", 20,  6, 130000],
//   ["Mie Ayam Combo", 100,  3, 20000],
//   ["Mia Ayam Spesial", 500,  5, 40000],
// ]));
/*
  [
    {
      menu: 'Bakso Spesial',
      ratio: 20,
      ingredients: 6,
      cost: 130000 }, 
    {
      menu: 'Mie Ayam Combo',
      ratio: 100,
      ingredients: 3,
      cost: 20000
    },
    {
      menu: 'Mie Ayam Spesial',
      ratio: 500,
      ingredients: 5,
      cost: 40000 
    }
  ]
*/

// ----------------------------------------------------------------------------

function calculateRawCost(ingredientsData) {
  // Your code here
  const result = []

  // stock = (ingredients * 1000) / ratio
  // investment = cost * ingredients

  for(let i = 0; i < ingredientsData.length; i++) {
    const obj = {
      menu: ingredientsData[i].menu,
      stock: (ingredientsData[i].ingredients * 100) / ingredientsData[i].ratio,
      investment: ingredientsData[i].cost * ingredientsData[i].ingredients
    }

    result.push(obj)
  }

  return result
}

// console.log(calculateRawCost(
//   [
//     {
//       menu: 'Bakso Spesial',
//       ratio: 20,
//       ingredients: 6,
//       cost: 130000
//     }, 
//     {
//       menu: 'Mie Ayam Combo',
//       ratio: 100,
//       ingredients: 3,
//       cost: 20000
//     },
//     {
//       menu: 'Mie Ayam Spesial',
//       ratio: 500,
//       ingredients: 5,
//       cost: 40000 
//     }
//   ]
// ));

/*
  [
    {
      menu: 'Bakso Spesial',
      stock: 300,
      investment: 780000
    },
    {
      menu: 'Mie Ayam Combo',
      stock: 30,
      investment: 60000
    },
    {
      menu: 'Mie Ayam Spesial',
      stock: 10,
      investment: 200000
    }
  ]
*/

// ----------------------------------------------------------------------------

function calculateROI(costData, ordersData) {
  // Your code here
  for(let i = 0; i < costData.length; i++) {
    costData[i].sales = 0

    for(let j = 0; j < ordersData.length; j++) {
      if(costData[i].menu === ordersData[j].menuItem) {
        if(costData[i].stock >= ordersData[j].amount) {
          costData[i].stock -= ordersData[j].amount
          costData[i].sales += ordersData[j].amount * ordersData[j].price
        } else   if(costData[i].stock < ordersData[j].amount){
          costData[i].menu = 'menu tidak tersedia'
      }
    }
  
    }
    costData[i].profit = costData[i].sales - costData[i].investment
    costData[i].roi = `${((costData[i].profit / costData[i].investment) * 100).toFixed(2)}%`
  }

  return costData
}

// const orderHistories2 = [
//   {
//     "menuItem": "Bakso Spesial",
//     "price": 20000,
//     "amount": 260
//   },
//   {
//     "menuItem": "Bakso Spesial",
//     "price": 20000,
//     "amount": 12
//   },
//   {
//     "menuItem": "Mie Ayam Combo",
//     "price": 18000,
//     "amount": 20
//   },
//   {
//     "menuItem": "Mie Ayam Spesial",
//     "price": 12000,
//     "amount": 6
//   }
// ]

// console.log(calculateROI([
//   {
//     menu: 'Bakso Spesial',
//     stock: 300,
//     investment: 780000
//   },
//   {
//     menu: 'Mie Ayam Combo',
//     stock: 30,
//     investment: 60000
//   },
//   {
//     menu: 'Mie Ayam Spesial',
//     stock: 10,
//     investment: 200000
//   }
// ], orderHistories2));

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

// ----------------------------------------------------------------------------

function incomeStatement(rawIngredients, orders) {
  // Your code here
  if(!rawIngredients || !orders) {
    return 'Invalid Data'
  }

  if(rawIngredients.length === 0 || orders.length === 0) {
    return 'Data is empty'
  }

  const ingredients = generateIngredients(rawIngredients)
  const rawCost = calculateRawCost(ingredients)
  const roi = calculateROI(rawCost, orders)
  // calculateROI(rawCost, orders)

  return roi
}

const rawData =  [
    ["Bakso Spesial", 20,  6, 130000],
    ["Mie Ayam Combo", 100,  3, 20000],
    ["Mie Ayam Spesial", 500,  5, 40000],
];

const orderHistories = [
        {
          "menuItem": "Bakso Spesial",
          "price": 20000,
          "amount": 260
        },
        {
          "menuItem": "Bakso Spesial",
          "price": 20000,
          "amount": 12
        },
        {
          "menuItem": "Mie Ayam Combo",
          "price": 18000,
          "amount": 20
        },
        {
          "menuItem": "Mie Ayam Spesial",
          "price": 12000,
          "amount": 6
        }
 ];

console.log(incomeStatement());
// Invalid data

console.log(incomeStatement([], []));
// Data is empty

console.log(incomeStatement(rawData, orderHistories));
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