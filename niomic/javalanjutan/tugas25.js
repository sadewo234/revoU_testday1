function tugas25() {
  let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    // let hasil = angka.filter((a) => a >10 )
    // console.log(hasil);

  //   

  console.log(`sebelumnya : ${angka}`);
  console.log(`ascending : ${angka.sort()}`);
  console.log(`descending : ${angka.reverse()}`);
  const temp = []
  for (let i = 0; i < angka.length; i++) {
    if (angka[i] > 10) {
      temp.push(angka[i]);
    }
  }
  console.log(`filter : ${temp}`)
}
;
tugas25();
