function filterRecipes(ingredients) {
  let recipes = [
    ["Dimsum", "Udang", "Ayam", "Kepiting"],
    ["Ayam Geprek", "Ayam", "Sambal", "Bawang"],
    ["Chicken Katsu", "Ayam", "Tepung Roti", "Terigu"],
    ["Kebab", "Daging Sapi", "Tortilla"],
    ["Bakso", "Daging Sapi", "Terigu"],
  ];
  // write your code here
  let hasil = [];
  for ( let i = 0; i < ingredients.length; i++) {
    for ( let j = 0; j < recipes.length; j++){
      if (recipes[j][0] === ingredients[i]) {
        hasil.push(recipes[j]);
      }
  }
  }
  return hasil;
}


console.log(filterRecipes(["Chicken Katsu", "Kebab", "Bakso"]));


function usersCanCook(users) {
  // write your code here
  if(!users){
    return 'invalid data'
  }

  let temp = []
  let word = ''
  for (let i = 0 ; i<= users.menu.length;i++){
    const el = users.menu[i]
    if(el === '-' || !el){
      temp.push(word)
      word = ''
    }else{
      word += el
    }
  }
  const filterd = filterRecipes(temp)
  if(filterd.length === 0){
    return 'menu not found'
  }
  return filterd
}

console.log(usersCanCook({
    name: "Fajrin",
    resto: "Fajrin Food",
    menu: "Chicken Katsu-Kebab-Bakso"
  })
);
/*
[
  [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
  [ "Kebab", "Daging Sapi", "Tortilla" ],
  [ "Bakso", "Daging Sapi", "Terigu" ]
]
*/

console.log(usersCanCook({
    name: "Rizka",
    resto: "Rizka Cafe",
    menu: "Mie-Pangsit"
  })
);
// "Menu not found"

console.log(usersCanCook());
// "Invalid Data!"
