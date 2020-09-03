const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const containerJoke = document.getElementById('jokeContainer');

  const joke = (data) => {
    containerJoke.innerHTML = data.joke;
  };

  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => joke(data));
};

window.onload = () => fetchJoke();

/*
fetch(`https://icanhazdadjoke.com/search?term=ghost'`)
  .then(result => console.log(result))
  .catch(error => console.log(error))
*/
