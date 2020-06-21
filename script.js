

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой фильм был последним?');
      b = prompt('На сколько оцените его?');
      c = prompt('Какой фильм был последним?');
      d = prompt('На сколько оцените его?');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);