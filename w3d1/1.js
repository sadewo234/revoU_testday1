function changeMe(arr) {
    // you can only write your code here!
      let  hasil = {}
      if (arr.length <1){
      console.log('');
      return ''
      } else {
        for (let i = 0 ; i < arr.length ; i++){
            for (let j = 0; j < arr[i].length; j++){
                hasil.firstName = arr[i][0]
                hasil.lastName = arr[i][1]
                hasil.gander = arr[i][2]
                hasil.age = arr[i][3]

                if(!hasil){
                    hasil.age = 'Invalid Birth Year'
                }
            }
            console.log((i + 1) + '. ' + hasil.firstName + ' ' + hasil.lastName + ':');
            console.log(hasil);
        }
    }
    return ''
  }



changeMe ([['Ogata', 'Rizu', 'female', 1995], ['John', 'Doe', 'male', 2000]])


// 1. Ogata Rizu: { firstName: 'Ogata', lastName: 'Rizu', gender: 'female', age: 27 }
// 2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 22 }