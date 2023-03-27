function parse (){
    let a = `13.78`
    let b = `9 naga`
    let c = `100.2323 meter`
    

    hasil1 = parseInt(a)
    console.log(hasil1);
    
    hasil2 = parseInt(b)
    console.log(hasil2);
    
    hasil3 = parseInt(c)
    console.log(hasil3);

    hasil4 = parseFloat(a)
    console.log(hasil4);
    //parseInt berfungsi untuk merubah data dari string menjadi number dengan menghilangkan bilangan decimal
    //parseFloat berfungsi untu merubah data dari string menjadi number tanpa menghilangkan bilangan decimal

}
parse()