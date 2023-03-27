const arra1 = [[0,1],[2,3],[4,5]].reduceRight(
    (accumulator , currentValue) => accumulator.concat(currentValue)
)
console.log(arra1);

// di balik dan di mulai dari data paling kanan