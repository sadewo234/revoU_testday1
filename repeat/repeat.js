let word ='sa1de4wo'
let hasil = ''

for(let i=0; i<word.length;i++){
    if(Number(word[i])) {
        for(let j=0; j<word[i];j++){
            hasil += word[i-1]
        }
    } else {
        hasil+=word[i]
    }

}
console.log(hasil);


