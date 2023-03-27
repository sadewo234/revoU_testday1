// jika umur kurang dari 18 maka tidak boleh masuk dan tampilkan "maaf [nama], kamu tidak dapat memasuki kawasan ini"
// jika uang pengunjung tidak mencapai 50000 dan tinggi kurang dari 166cm dan tampilkan "tinggi kamu kurang [selisih]cm 
// dan kamu kurang uang sebanyak [selisihuang]untuk menaiki wahana favorit! Tapi tenang , kamu dapat menaiki wahana kuda putar !"
// jika uang pengunjung tidak mencapai 50000 dan tingginya 166cm keatas dan tampilkan 
// " kamu kurang uang sebanyak [selisihuang]untuk menaiki wahana favorit!  Tapi tenang , kamu dapat menaiki wahana lontang lanting!"
// jika uang pengunjung lebih dari 50000 dan tingginya kurang dari 166cm maka tampilkan "tinggi kamu kurang untuk [selisihtinggi]
// cm untuk menaiki wahana favorit! tapi tenang , kamu dapat menaiki wahana Trilili "
// jika uang pengunjung lebih dari 50000 dan tingginya 166cm keatas , maka tampilkan "yeay kamu dapat menaiki wahana favorit ! Yaitu Kocar-Kacir!"


var nama = 'ihsan'
var uang = '30000'
var tinggi = '166'
var umur = '18'

if (umur < 18){
console.log("maaf " + nama + ", kamu tidak dapat memasuki kawasan ini" )
}
if (uang <= 50000 && tinggi < 166){
    console.log ('tinggi kamu kurang ' + (166 - tinggi) + 'cm dan kamu kurang uang sebanyak ' + (50000 - uang) + 'untuk menaiki wahana favorit! Tapi tenang , kamu dapat menaiki wahana kuda putar !' )
}
if(uang < 50000 && tinggi > 166) {
    console.log(" kamu kurang uang sebanyak " + (50000 - uang) + "untuk menaiki wahana favorit!  Tapi tenang , kamu dapat menaiki wahana lontang lanting!")
}
if (uang >= 50000 && tinggi < 166) {
    console.log ("tinggi kamu kurang untuk " + (166 - tinggi) +"cm untuk menaiki wahana favorit! tapi tenang , kamu dapat menaiki wahana Trilili " )
}
else {
    console.log ("yeay kamu dapat menaiki wahana favorit ! Yaitu Kocar-Kacir!")
}

