function toWeirdCase(string) {
  let output = "";
  //code here
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      output += string[i].toLowerCase()
    } else {
      output += string[i].toUpperCase();
    }
  }
  return output
}
console.log(toWeirdCase("String")); //=> returns "StRiNg"
console.log(toWeirdCase("Weird string case")); //=> returns "WeIrD StRiNg CaSe"

console.log(toWeirdCase("This is a test")); // => ThIs Is A TeSt
