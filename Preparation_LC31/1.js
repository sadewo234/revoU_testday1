function calculateAverage(data) {
    // Your code here
    let avg = 0

    for(let i = 0 ; i < data.length; i++){
     let stat = data[i]
     avg += stat.status.attack + stat.status.defense + stat.status.magic + stat.status.agility 

    
    }
    let total = avg / data.length
   
return total
   
}

function groupByClass(data) {
    // Your code here
let hasil = {}
let temp= 0
let oldest = 0
let oldestPlayer= 0


for(let i =0;i<data.length ; i++){
// console.log(data[i]);
  if (!hasil[data[i].class]){
    hasil [data[i].class] = {}
  }
  temp = data[i].age
  
  if(data[i].age > oldest){
  oldest = data[i].age
  oldestPlayer = data[i]
  }
  if (oldestPlayer === data[i].class){

  }
  
  if(hasil[data[i].class].oldestPlayer < data[i].age){
    hasil[data[i].class].oldestPlayer = data[i].age
    hasil[data[i].class].oldes = data[i]
    

  }
  hasil[data[i].class].oldestPlayer = oldestPlayer
}

return hasil
}

const players = [
    { name: 'Arthur', age: 28, status: { attack: 890, defense: 700, agility: 800, magic: 870 }, class: 'Swordman' },
    { name: 'Loren', age: 28, status: { magic: 400, attack: 920, defense: 800, agility: 760 }, class: 'Swordman' },
    { name: 'Nimo', age: 38, status: { magic: 200, attack: 300, defense: 100, agility: 200 }, class: 'Swordman' },
    { name: 'Jared', age: 25, status: { attack: 700, defense: 640, agility: 520, magic: 1200 }, class: 'Mage' },
    { name: 'Arthur', age: 16, status: { agility: 520, attack: 550, defense: 470, magic: 800 }, class: 'Mage' },
    { name: 'Takahasi', age: 23, status: { agility: 130, attack: 550, defense: 670, magic: 890 }, class: 'Mage' },
    { name: 'Takeda', age: 28, status: { attack: 640, agility: 520, defense: 1100, magic: 400 }, class: 'Tank' },
    { name: 'Takahasi', age: 21, status: { attack: 400, agility: 312, defense: 815, magic: 500 }, class: 'Tank' },
    { name: 'Yuki', age: 22, status: { attack: 450, agility: 520, defense: 1000, magic: 300 }, class: 'Tank' },
    { name: 'Nagisa', age: 16, status: { defense: 320, agility: 1000, attack: 580, magic: 520 }, class: 'Assasin' },
    { name: 'Nimo', age: 20, status: { defense: 400, agility: 230, attack: 611, magic: 700 }, class: 'Assasin' },
    { name: 'Loren', age: 30, status: { defense: 516, agility: 961, attack: 977, magic: 300 }, class: 'Assasin' }
]
// console.log(calculateAverage(players));
console.log(groupByClass(players));
/*
{
  Swordman: {
    oldestPlayer: { name: 'Nimo', age: 38, status: [Object], class: 'Swordman' }
  },
  Mage: {
    oldestPlayer: { name: 'Jared', age: 25, status: [Object], class: 'Mage' }
  },
  Tank: {
    oldestPlayer: { name: 'Takeda', age: 28, status: [Object], class: 'Tank' }
  },
  Assasin: {
    oldestPlayer: { name: 'Loren', age: 30, status: [Object], class: 'Assasin' }
  },
  averagePower: 2387.6666666666665
}
*/

// console.log(groupByClass([
//     { name: 'Nimo', age: 38, status: { magic: 200, attack: 300, defense: 100, agility: 200 }, class: 'Swordman' },
//     { name: 'Jared', age: 25, status: { attack: 700, defense: 640, agility: 520, magic: 1200 }, class: 'Mage' }
// ]));
// data tidak lengkap

// console.log(groupByClass());
// invalid input