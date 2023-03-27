function splice(){
    let kota = [`jakarta`, `medan`,`padang`,`malang`]
    console.log(kota)
    console.log(`========`);    

    // kota.splice(1,0,`palembang`)
kota.splice(1,3)


    return kota
}
// splice memasukan sebuah data sesuai keinginan kita
console.log(splice());