// function SplitTheString(ResultStr) {
//     if (ResultStr != null) {
//         var SplitChars = '~';
//         if (ResultStr.indexOf(SplitChars) >= 0) {
//             var DtlStr = ResultStr.split(SplitChars);
//             var name  = DtlStr[0];
//             var street = DtlStr[1];
//         }
//     }
// }

// console.log('i love java script');


// //split string, hanya boleh pake push dan length
// let manualSplit = function (str) {

// }

// console.log(manualSplit('I Love Javascript')) // ['I', 'Love', 'Javascript']
// console.log(manualSplit('Javascript is so cool')) // ['Javascript', 'is', 'so', 'cool']

const splitString = (str) => {
    let resultArray = [];              //1
    let tempString = '';               //2
    for(var i = 0; i< str.length;i++){ //3
        if(str[i] !== ' '){            //4
          tempString += str[i];        //5
         } else{                       
          resultArray.push(tempString);//6
          tempString = "";             //7
        }
    }
    return resultArray;                //8
 }
 console.log(splitString('i love java script'));