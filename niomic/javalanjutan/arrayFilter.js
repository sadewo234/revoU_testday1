function filter (){
let people = [
    {
        name: `andi`,
        gender: `male`
    },
    {
        name: `siti`,
        gender: `female`
    },
    {
        name:`cindi`,
        gender:`female`
    }
]
let female = people.filter(people => {
    return people.gender !== `male`
})
console.log(female);
}
filter()