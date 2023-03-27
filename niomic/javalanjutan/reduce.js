function reduce() {
    const arr1 =[1,2,3,4]
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    console.log(arr1.reduce(reducer));
    console.log(arr1.reduce(reducer, ));
}

reduce()


// reducer adalah penjumlaha dari semua isi array 