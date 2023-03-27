function find (){
let arr1 = [5,12,8,120,44]
let found = arr1.findIndex(function(element){
    return element > 7
})
console.log(found);

}
find ()