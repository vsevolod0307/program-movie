

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Кто красапета?');
      b = prompt('На сколько оценитшь себя?');
      c = prompt('у кого сегодня был СЕКС?');
      d = prompt('На сколько оцените его?');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);