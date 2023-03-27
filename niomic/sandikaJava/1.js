// cara membuat object pada javascript
// 1. object literal
// PROBLEM : tidak efektif untuk object yang banyak

// let mahasiswa1 = {
//     nama : `dewo`,
//     energi: 10 ,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi
//         console.log(`halo ${this.nama} selamat makan`);
//     }
// }
// let mahasiswa2 = {
//     nama : `fakhri`,
//     energi: 20 ,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi
//         
//     }
// }

// // 2. Function Declaration
// 
// Object.create() berfungsi untuk memberitahu parent object
// agar kita tidak perlu mendaftarkan object baru
const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi
        console.log(`halo ${this.nama}, selamat makan`);
    },

    main : function(jam){
        this.energi -= jam
        console.log(`halo ${this.nama} selamat main!`);
    },

    tidur : function(jam){
        this.energi += jam * 2
        console.log(`halo ${this.nama} selamat tidur!`);
    }

}
function Mahasiswa (nama , energi){
    let mahasiswa = Object.create(methodMahasiswa)
    mahasiswa.nama = nama
    mahasiswa.energi = energi
    
    return mahasiswa
    
}
let dewo = Mahasiswa(`dewo`,10)
let fakhri = Mahasiswa(`fakhri`, 20)

//constructor function
// keyword new

// function Mahasiswa (nama , energi){
//     this.nama = nama
//     this.energi = energi

//     this.makan = function(porsi){
//         this.energi += porsi
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     this.main = function(jam){
//         this.energi -= jam
//         console.log(`halo ${this.nama} selamat main!`);
//     }
// }

// let dewo = new Mahasiswa(`dewo` , 10)