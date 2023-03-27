const string = "Blackpink in your area";
// console.log(string.split('').reverse().join(''))
// console.log(string.split('').reverse().join('').split(' ').reverse().join(' '))

function split(str, separator) {
  let result = [];
  let temp = "";
  //   console.log(str.length);
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === separator || str[i] === undefined) {
      result.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  return result;
}

function reverse(arr) {
  let result = [];

  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let temp = "";
    for (let x = arr[i].length - 1; x >= 0; x--) {
      temp += arr[i][x];
    }
    result.push(temp);
    // console.log(temp);
  }
  return result;
}

function join(arr, separator) {
  let result = "";
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i]}${separator}`;
  }
  return result;
}

function main(str) {
  let splitResult = split(str, " ");
  // console.log(splitResult)
  let reverseArr = reverse(splitResult);
  //   console.log(reverseArr);
  let joinArr = join(reverseArr, " ");
  // console.log(joinArr)
  //   splitResult = split(joinArr, " ");
  // console.log(splitResult)
  //   reverseArr = reverse(splitResult);
  // console.log(reverseArr)
  //   joinArr = join(reverseArr, " ");
  // console.log(joinArr)

  return joinArr;
}

console.log(main(string));
// knipkcalB ni ruoy aera
console.log(main("Javascript is so cool"));
// tpircsavaJ si os looc
