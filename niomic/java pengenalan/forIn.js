function forIn (){
let mahasiswa ={
    nama: `aldo`,
    umur: 32,
    jurusan: `teknik informatika`,
    semester: 7,
}
console.log(mahasiswa);
console.log(`==============`);
for(let i in mahasiswa){
    console.log(mahasiswa[i]);
}

}
forIn()