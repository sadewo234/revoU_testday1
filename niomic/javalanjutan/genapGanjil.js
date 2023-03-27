function genap (){

    let data = []
    let ganjil = []
    let lima = []

    for(let i = 1 ; i<50 ; i++){
        if(i%2  === 0 ){
            data.push(i)
        }
        if (i%2 !== 0){
            ganjil.push(i)
        }
        if (i%5 === 0){
            lima.push(i)
        }

    }
    return lima
}
console.log(genap ());