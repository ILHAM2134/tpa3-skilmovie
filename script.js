/* ----------HOME---------- */

let dataMovieRaw;
let dataMovie;
const container = document.getElementById("container");

const url = `https://api.themoviedb.org/3/discover/movie?api_key=fa5d5abd2e9cb85ddc41a029e999ecd3&sort_by=popularity.desc&page=1`;

async function getData() {
	await fetch(url)
		.then((a) => a.text())
		.then((b) => JSON.parse(b))
		.then((c) => (dataMovieRaw = c));

	dataMovie = dataMovieRaw.results;

	container.innerHTML = "";

	dataMovie.forEach((data) => {
		let caption = "";
		if (data.overview.length > 130) {
			caption = data.overview.substring(0, 150) + `...`;
		} else {
			caption = data.overview;
		}

		const card = document.createElement("div");
		card.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.title} (<i class="ri-star-s-fill"></i>${data.vote_average})</h5>
    <p class="card-text">${caption}</p>
    <p class="card-text opacity-75">Release date : ${data.release_date}</p>
    <a href="#" class="btn btn-primary">Lihat detail</a>
        </div></div>`;

		container.setAttribute("class", "mt-5 d-flex flex-row flex-wrap gap-4 justify-content-center");
		container.appendChild(card);
	});
}
document.addEventListener("DOMContentLoaded", getData);

/* ----------BTN HOME---------- */

const btnHome = document.getElementById("btn-home");

btnHome.addEventListener("click", getData);

/* ----------SEARCH---------- */

let searchDataContainer = "";
let dataSearch;
const button = document.getElementById("btn-submit");

async function getSearch() {
	event.preventDefault();
	let input = document.getElementById("input-submit");
	const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=fa5d5abd2e9cb85ddc41a029e999ecd3&query=${input.value}&page=1`;

	container.innerHTML = "";

	await fetch(searchURL)
		.then((a) => a.text())
		.then((b) => JSON.parse(b))
		.then((c) => (searchDataContainer = c));

	dataSearch = searchDataContainer.results;

	dataSearch.forEach((data) => {
		let caption = "";
		if (data.overview.length > 130) {
			caption = data.overview.substring(0, 150) + `...`;
		} else {
			caption = data.overview;
		}
		const card = document.createElement("div");
		card.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.title} (<i class="ri-star-s-fill"></i>${data.vote_average})</h5>
    <p class="card-text">${caption}</p>
    <p class="card-text opacity-75">Release date : ${data.release_date}</p>
    <a href="#" class="btn btn-primary">Lihat detail</a>
        </div></div>`;

		container.setAttribute("class", "mt-5 d-flex flex-row flex-wrap gap-4 justify-content-center");
		container.appendChild(card);
	});
}

button.addEventListener("click", getSearch);
