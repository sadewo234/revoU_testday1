let s= `abCdefGhb2123 !@ $#%$# *&(&)`

console.log(s.match(/\d/g));

console.log(s.match(/\D/g));

console.log(s.match(/\w/g));

console.log(s.match(/\W/g));

console.log(s.match(/\s/g));