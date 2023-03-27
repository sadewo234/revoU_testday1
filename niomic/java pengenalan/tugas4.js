function tugas4(){
let tinggi1 = 170
let tinggi2 = 180
let tinggi3 = 190
let nama1= `andi`
let nama2 = `mawah`
let nama3 = `gugun`


if (tinggi1 > tinggi2 && tinggi1 > tinggi3 && tinggi2 > tinggi3){
    console.log(`siswa tertinngi adalah ${nama1} dengan tinggi ${tinggi1} , disusul dengan ${nama2} dengan nilai ${tinggi2} , dan terakhir ${nama3} dengan nilai ${tinggi3}`);
}else if (tinggi2> tinggi1 && tinggi2 > tinggi3 && tinggi1 > tinggi3){
    console.log(`siswa tertinngi adalah ${nama2} dengan tinggi ${tinggi2} , disusul dengan ${nama1} dengan nilai ${tinggi1} , dan terakhir ${nama3} dengan nilai ${tinggi3}`);
}else if (tinggi3> tinggi1 && tinggi3> tinggi2  ){
    console.log(`siswa tertinngi adalah ${nama3} dengan tinggi ${tinggi3} , disusul dengan ${nama2} dengan nilai ${tinggi2} , dan terakhir ${nama1} dengan nilai ${tinggi1}`);
}
console.log(`=======================================`);

}
tugas4()