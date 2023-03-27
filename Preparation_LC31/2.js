function generateId(plant) {
    // Insert your code here
}

function generateStatusAndPrice() {
    // Insert your code here
    let plantData = [
        { name: "Jeruk Bali", height: 2.4, age: 2, family: "Rutaceae" },
        { name: "Pisang Susu", height: 1, age: 0.4, family: "Musaceae" },
        { name: "Mangga Arumanis", height: 10.3, age: 5.5, family: "Anacardiaceae" },
        { name: "Jeruk Purut", height: 3.3, age: 2.1, family: "Rutaceae" },
        { name: "Mangga indramayu", height: 6.3, age: 3.6, family: "Anacardiaceae" },
        { name: "Pisang Ambon", height: 1.2, age: 0.3, family: "Musaceae" },
        { name: "Mangga Madu", height: 5.3, age: 2.5, family: "Anacardiaceae" },
        { name: "Pisang Radjha", height: 2.3, age: 0.5, family: "Musaceae" },
        { name: "Jeruk Nipis", height: 2.3, age: 1.4, family: "Rutaceae" },
        { name: "Mangga Golek", height: 4.7, age: 3.5, family: "Anacardiaceae" },
    ];
    // Insert your code here
}

function fulfillCustomerRequest(requests) {
    // Insert your code here
}

function customerInvoice(customer) {
    // Insert your code here
}

const hiruma = {
    name: 'hiruma',
    plantRequests: [
        ['Musaceae', 'tall'],
        ['Musaceae', 'Medium'],
        ['Anacardiaceae', 'tall']
    ]
}

console.log(customerInvoice(hiruma))
/**
{
  name: 'hiruma',
  plants: [
    {
      id: '615A',
      name: 'Mangga Arumanis',
      height: 10.3,
      family: 'Anacardiaceae',
      status: 'tall',
      price: 42000
    },
    {
      id: '416A',
      name: 'Mangga indramayu',
      height: 6.3,
      family: 'Anacardiaceae',
      status: 'tall',
      price: 42000
    },
    {
      id: '311A',
      name: 'Mangga Madu',
      height: 5.3,
      family: 'Anacardiaceae',
      status: 'tall',
      price: 42000
    },
    {
      id: '412A',
      name: 'Mangga Golek',
      height: 4.7,
      family: 'Anacardiaceae',
      status: 'tall',
      price: 42000
    }
  ],
  totalPrice: 168000
}
 */

const sena = {
    name: 'sena',
    plantRequests: [
        ['Rutaceae', 'medium'],
        ['Musaceae', 'short']
    ]
}
console.log(customerInvoice(sena))
/*
{
  name: 'sena',
  plants: [
    {
      id: '210R',
      name: 'Jeruk Bali',
      height: 2.4,
      family: 'Rutaceae',
      status: 'medium',
      price: 20000
    },
    {
      id: '111M',
      name: 'Pisang Susu',
      height: 1,
      family: 'Musaceae',
      status: 'short',
      price: 9000
    },
    {
      id: '311R',
      name: 'Jeruk Purut',
      height: 3.3,
      family: 'Rutaceae',
      status: 'medium',
      price: 20000
    },
    {
      id: '112M',
      name: 'Pisang Ambon',
      height: 1.2,
      family: 'Musaceae',
      status: 'short',
      price: 9000
    },
    {
      id: '211R',
      name: 'Jeruk Nipis',
      height: 2.3,
      family: 'Rutaceae',
      status: 'medium',
      price: 20000
    }
  ],
  totalPrice: 78000
}
*/

console.log(customerInvoice())
// Tidak ada Customer yang dikirimkan