// CONTOH 1
// var nama = "Fajrin";
// var umur = 18;
// var tinggi = 150 harusnya tinggi 166
// var uang = 55000;
// maka output yang dihasilkan adalah "Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!"

// CONTOH 2
var nama = "Aji";
var umur = 23;
var tinggi = 165;
var uang = 49000;
// maka output yang dihasilkan adalah "Tinggi kamu kurang 1cm dan kamu kurang uang sebanyak 1000 untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"
var selisihTinggi = 166 - tinggi
var selisihUang = 50000 - uang

if(umur < 18) {
    console.log(`Maaf ${nama}, kamu tidak dapat memasuki kawasan ini!`);
    else if(umur > 50) 
        console.log (`Maaf ${nama}, umur lewat batas`)
    
} else if(umur >= 18) {
    if(uang < 50000 && tinggi < 166) {
        console.log(`Tinggi kamu kurang ${selisihTinggi}cm dan kamu kurang uang sebanyak ${selisihUang} untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!`);
    } else if(uang < 50000 && tinggi >= 166) {
        console.log(`Kamu kurang uang sebanyak ${selisihUang} untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!`);
    } else if(uang >= 50000 && tinggi < 166) {
        console.log(`Tinggi kamu kurang ${selisihTinggi}cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!`);
    } else if(uang >= 50000 && tinggi >= 166) {
        console.log(`Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!`);
    }
    
    
}