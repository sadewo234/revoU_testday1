const string = 'Blackpink in your area'
// console.log(string.split('').reverse().join(''))
// console.log(string.split('').reverse().join('').split(' ').reverse().join(' '))

function split(str, separator) {

}

function reverse(arr) {

}

function join(arr, separator) {

}

function main(str) {
  let splitResult = split(str, '')
  // console.log(splitResult)
  let reverseArr = reverse(splitResult)
  // console.log(reverseArr)
  let joinArr = join(reverseArr, '')
  // console.log(joinArr)
  splitResult = split(joinArr, ' ')
  // console.log(splitResult)
  reverseArr = reverse(splitResult)
  // console.log(reverseArr)
  joinArr = join(reverseArr, ' ')
  // console.log(joinArr)

  return joinArr
}

// console.log(main(string))
// knipkcalB ni ruoy aera
// console.log(main('Javascript is so cool'))
// tpircsavaJ si os looc