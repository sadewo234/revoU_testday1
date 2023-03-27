function cariMedian(arr) {
    let lengthArr = arr.length;
    let sortingArr = arr.sort(function (a, b){ 
      return a - b
    });
   
    if (lengthArr%2 === 0) {
      let sum = sortingArr[lengthArr/2]+sortingArr[lengthArr/2-1]
      return sum/2
    } else {
      return sortingArr[Math.floor(lengthArr/2)]
    }
  }
  


console.log(cariMedian ([5,4,3,2,1])); // 3
console.log(cariMedian ([13,4,3,10,12,1])); // 7
console.log(cariMedian ([4,3,7,6,10])); // 6
console.log(cariMedian ([1,3,3])); // 3
console.log(cariMedian ([8,7,8,7])); // 7.5