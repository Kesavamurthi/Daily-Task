const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');
const movies = [];

const renderMovie = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    
    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    }else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info){
            if(key !== 'title'){
                text = text + `${key} : ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addNewMovieHandler = () => {
    const userTitle = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    const newMovie = {
        info : {
            title : userTitle,
            [extraName] : extraValue
        },
        id : Math.random().toString()
    };

    movies.push(newMovie);
    renderMovie();
}; 

const searchMoviehandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovie(filterTerm);
};

addMovieBtn.addEventListener('click', addNewMovieHandler);
searchMovieBtn.addEventListener('click',searchMoviehandler);