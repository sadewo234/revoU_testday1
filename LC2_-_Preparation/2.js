function filterMovie(genres) {
    let movies = [
        ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
        ["Action", "Mad Max", "The Batman", "Josh Wick"],
        ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
        ["Comedy", "Safety Last", "The Trip"]
    ];
    // write your code here
    let result = [] //    ["Action", "Mad Max", "The Batman", "Josh Wick"], ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"], ["Comedy", "Safety Last", "The Trip"]
    for (let i = 0; i < genres.length; i++) {
        for (let j = 0; j < movies.length; j++) {
            if (movies[j][0] === genres[i]) {
                result.push(movies[j])
                break
            }
        }
    }
    return result
}

console.log(filterMovie([ "Action", "Drama", "Comedy" ]));

function usersCanWatch(users) {
    // write your code here
    if (!users) {
        return 'Invalid Data!'
    }
   
    let temp = []
    let word = ''
    for (i = 0; i <= users.menu.length; i++) {
        const el = users.menu[i]
        if (el === ';' || !el) { // kalau ketemu ; atau undefined di push
            temp.push(word)
            word = ''
        } else {
            word += el
        }
    }
    const filtered = filterMovie(temp)
    if (filtered.length === 0) {
        return ' Movie not found'
    }
    return filtered
}

// TEST CASE
const user1 = {
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
    name: "Tole",
    cinema: "XIIX",
    menu: "Fantasy;Adventure;Comedy"
};
console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
    name: "Rizky",
    cinema: "Cinepolos",
    menu: "Scifi-Musical"
};
console.log(usersCanWatch(user3));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"