/**
 * Tuliskan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, Sebuah kebun binatang ingin mengganti harga tiketnya. Saat ini, kebun binatang tersebut memiliki HARGA DASAR
 * Rp 10.000. Harga tiket masuk akan disesuaikan dengan umur dari pengunjung tersebut. Kamu diminta untuk membuat program yang akan menghitung
 * harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA dan TAHUN KELAHIRAN.
 *
 * -Umur < 2 tahun: gratis
 * -Umur 2-10:  Harga dasar
 * -Umur 11-18:  Harga dasar dikalikan 1.5
 * -Umur 19 keatas: Harga dasar dikalikan 2
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

let nama = "";
let umur = "5";
let hargadasar = 10000;
let harga = "";
let kelahiran = "";

if (umur < 2) {
  console.log("gratis");
}
else if  (umur >= 120 || kelahiran < 1900); {
    console.log("Invalid Age");
}  if (umur >= 2 && umur <= 10){
    console.log(hargadasar);
}
  


// } else if {
//     if (umur >= 2 && umur <= 10) {
//   console.log(hargadasar);
// }
// if (umur >= 11 && umur <= 18) {
//   console.log((harga = hargadasar * 1.5));
// } else {
//   console.log((harga = hargadasar * 2));
// }
// }