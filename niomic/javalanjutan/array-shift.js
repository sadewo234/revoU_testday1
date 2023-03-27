function panggilShift(){
    let kota = ['jakarta', 'bandung', 'malang','surabaya','makassar']
    console.log(kota);
    console.log("=============");

    // kota = kota.shift();
    kota.shift();
    
    return kota
}

// menghapus data paling depan
console.log(panggilShift());