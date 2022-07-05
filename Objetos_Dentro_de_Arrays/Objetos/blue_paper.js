const movies = ["Godfather", "Evil Dead", "Z World"];

let gridSquare = movies[0];
console.log(gridSquare);

let annouceMovies = function(movieByMovie){
    console.log(`We are going to show ${movieByMovie} today`)
}
for (var movieByMovie of movies) {
    annouceMovies(movieByMovie);
}

console.log(annouceMovies)