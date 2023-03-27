function regexExp(){
    let data = `belajar satu tahun bersama Niomic`
    let str = new RegExp(`Niomic`)
    console.log(str.exec(data));
}

regexExp()