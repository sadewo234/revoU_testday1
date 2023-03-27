function nastedObj () {
let mahasiswa = {
    nama: `sadewo`,
    ipk:{
        semester1 : 3.4,
        semester2 : 3.75,
        semester3 : 3.73,
        semester4 : 4
    }
    
}
mahasiswa.ipk.semester4 = 3

    console.log(mahasiswa.ipk.semester4);
}
nastedObj ()