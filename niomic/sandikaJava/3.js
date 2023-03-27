// let tampilPesan =  (nama) => {
// alert(`halo` + nama)
// }

// tampilPesan(`fakhri sadewo`)

// const panggilNama = function (nama){
//     return `halo , ${nama}`
// }

// console.log(panggilNama(`fakhri sadewo`));

// arrow function

// const Tampilnama = (nama) => {
//     return ` halo ${nama}`

// }
// console.log(Tampilnama (`sadewo`));

// arrow function 2 param

// const waktu = (nama,waktu) => {
//     return `halo ${nama} , selamat ${waktu}`
// }
// console.log(waktu(`sadewo` , `malam`));

// kalo satu param tidak memakai kurung tidak masalah
// 2 param harus menggunaka kurung
// implisit return bisa tidak memakai return dan kurung kurawal

// function map

// let mahasiswa = [`sadewo`, `fakhri` , `muhammad`]

// // let jumlahHuruf = mahasiswa.map(function(nama){
// //     return nama.length
// // })

// // console.log(jumlahHuruf);

// // let jumlahHuruf = mahasiswa.map( nama => nama.length)
// // console.log(jumlahHuruf);

// //mengembalikan dalam bentuk obj

// let jumlahHuruf = mahasiswa.map(nama => ({
//   nama ,
//     jmlHuruf : nama.length
// }))
// console.table(jumlahHuruf);

// konsep this pada arrow function

//contructor Function
// const Mahasiswa = function (){
//     this.nama = `sadewo`
//     this.umur = 26
//     this.sayHello = function(){
// console.log(`halo , nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

// }

// const sadewo = new Mahasiswa

// arrow function

// const Mahasiswa = function (){
//     this.nama = `sadewo`
//     this.umur = 26
//     this.sayHello =() => {
// console.log(`halo , nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

// }

// const sadewo = new Mahasiswa

//object Literal

// const mhs1 = {
//   nama: `sadewo`,
//   umur: 26,
//   sayHello : () => {
//     console.log(`halo , nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   }
// }

// const Mahasiswa = function (){
//     this.nama = `sadewo`
//     this.umur = 26
//     this.sayHello = function(){
// console.log(`halo , nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
//     setInterval(()=> {
//         console.log(this.umur++);
//     },500)

// }

// const sadewo = new Mahasiswa()

// LATIHAN DENGAN INDEX

const box = document.querySelector(`.box`)
box.addEventListener (`click`, function(){
    let satu = `size`
    let dua = `caption`

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua , satu]
    }


    this.classList.toggle(satu)
    setTimeout(()=> {
        this.classList.toggle(dua)
    },600)
})