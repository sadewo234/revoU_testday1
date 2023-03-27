function obj (){
    let mobil = {
        type : `sedan`,
        harga : 200_000_000,
        warna : `Putih`,
        tahun : [2001,2002,2003,2004]
    }

    mobil.harga = 100_000_000
    mobil.transmission = [`matic`, `manual`]
    console.log(mobil);
    console.log(mobil.harga);
    console.log(mobil.tahun[3]);
 
    }
    
    obj ()