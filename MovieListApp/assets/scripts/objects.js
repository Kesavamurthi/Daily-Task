const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');
const movies = [];

const renderMovie = () => {
    const movieList = document.getElementById('movie-list');
    
    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    }else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    movies.forEach((movie) => {
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
    console.log(userTitle);
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    const newMovie = {
        info : {
            title : userTitle,
            [extraName] : extraValue
        },
        id : Math.random()
    };

    movies.push(newMovie);
    renderMovie();
}; 

addMovieBtn.addEventListener('click', addNewMovieHandler);