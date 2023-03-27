function tugas9 (){
    let biodata = {
        nama: `sadewo`,
        alamat: `senopati`,
        tempatLahir: `jakarta`,
        hobby: [`makan` , `tidur`],
    }
    console.log(biodata);
    console.log(`=======================`);

    for (let i in biodata){
        console.log(biodata[i]);
    }
    
}
tugas9 ()