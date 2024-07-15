const addingMovieBtn = document.getElementById('adding');
const model = document.getElementById('add-modal');
const back = document.getElementById('backdrop');
const cancelbtnelement = document.querySelector('.btn--passive')
const addbtnelement = cancelbtnelement.nextElementSibling;
const userInput = document.querySelectorAll('input');
const movies = [];
const entryCard = document.getElementById('entry-text');

const backdropToggle = () => {
    back.classList.toggle('visible');
}

const addingMovieButton = () =>{
    model.classList.toggle('visible');
    backdropToggle();
};

const backdropToggleClickHandler = () => {
    addingMovieButton();
};



const cancelbtn = () => {
    addingMovieButton();
    clearUserInput();
};

const clearUserInput = () => {
    for (const usrinp of userInput){
        usrinp.value = '';
    }
};

const renderUI = () => {
    
    if (movies.length == 0){
        entryCard.style.display='block';
    }else {
        entryCard.style.display='none';
    }
}

const newMovieList = (title, url, rating) =>{
    const newList = document.createElement('li');
    newList.className = 'movie-element';
    newList.innerHTML = `
        <div class="movie-element__image">
            <img src="${url}" alt="${title}" 
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5</p>
        </div>
        </div>
    `;
    const root = document.getElementById('movie-list');
    root.append(newList);
}

const confirmAddingMovie = () => {
    // alert('helo');
    const movieInput = userInput[0].value;
    const urlInput = userInput[1].value;
    const ratingInput = userInput[2].value;

    if (movieInput === '' || urlInput === '' || ratingInput < 1 || ratingInput >5){
        alert('please enter a valid rating between 1 to 5');
    }

    const newMovie = {
        title : movieInput,
        link : urlInput,
        rating : ratingInput
    };

    movies.push(newMovie);
    console.log(movies);
    addingMovieButton();
    renderUI();
    newMovieList(newMovie.title, newMovie.link, newMovie.rating);
    clearUserInput();
};


addingMovieBtn.addEventListener('click',addingMovieButton);
back.addEventListener('click',backdropToggleClickHandler);
cancelbtnelement.addEventListener('click',cancelbtn);
addbtnelement.addEventListener('click',confirmAddingMovie);
