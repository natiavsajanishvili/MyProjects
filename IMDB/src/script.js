//---BURGER MENU---//
const burger = document.querySelector(".hamburger");
const off = document.querySelector(".off");
const lines = document.querySelector(".lines");
lines.addEventListener("click", function () {
  burger.classList.toggle("open");
  off.classList.toggle("open");
});

//---LIGHT MODE---//
const body = document.querySelector(".body");
const links = document.querySelectorAll("a");
const spans = document.querySelectorAll("span");
const h2s = document.querySelectorAll("h2");
const ps = document.querySelectorAll("p");
const asideIcons = document.querySelectorAll(".asideIcon");
const searchdiv = document.querySelector(".searchdiv");
const homeSection = document.querySelector(".homeSection");
const backgroundMode = document.querySelector(".backgroundMode");
const icon = document.querySelector(".fa");

backgroundMode.addEventListener("click", () => {
  if (backgroundMode.classList.contains("dark")) {
    backgroundMode.classList.remove("dark");
    backgroundMode.classList.add("light");
    backgroundMode.textContent = "Dark";

    applayLightMode();
  } else {
    backgroundMode.classList.remove("light");
    backgroundMode.classList.add("dark");
    backgroundMode.textContent = "Light";

    applayLightMode();
  }

  if (icon.classList.contains("fa-sun-o")) {
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
    backgroundMode.prepend(icon);
  } else {
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o");
    backgroundMode.prepend(icon);
  }
});

function applayLightMode() {
  body.classList.toggle("light");
  searchdiv.classList.toggle("light");
  homeSection.classList.toggle("light");
  input.classList.toggle("light");

  asideIcons.forEach((icon) => {
    icon.classList.toggle("light");
  });

  links.forEach((link) => {
    link.classList.toggle("light");
  });
  spans.forEach((span) => {
    span.classList.toggle("light");
  });
  h2s.forEach((h2) => {
    h2.classList.toggle("light");
  });
  ps.forEach((p) => {
    p.classList.toggle("light");
  });
}

//---SEARCH FILMS---//
const apiKey = "5a036fc9";
const baseUrl = "http://www.omdbapi.com/";
const input = document.querySelector(".input");

const searchedList = document.querySelector(".searchedList"); //ul

const fetchMovies = async (searchWord) => {
  try {
    const data = await fetch(`${baseUrl}?apikey=${apiKey}&s=${searchWord}*`);
    const resp = await data.json();
    let response = resp.Search;
    takeOutMovieList(response);
  } catch (error) {
    console.error("An error to fetch data");
    writeNoResults();
  }
};

const takeOutMovieList = (movies) => {
  console.log(movies);
  searchedList.innerHTML = "";
  if (movies.length === 0) {
    writeNoResults();
  } else {
    movies.forEach((movie) => {
      const { imdbID, Title, Poster } = movie;
      const movieItem = document.createElement("li");
      movieItem.classList.add("movie-list-item");
      movieItem.innerHTML = `<img src="${Poster}" alt="${Title}"
      class="listedMovie-img">
      <span class="listedMovie-title">${Title}</span>
      
      `;
      movieItem.addEventListener("click", () => {
        seeMovieDetails(imdbID);
      });
      searchedList.appendChild(movieItem);
    });
  }
};

const writeNoResults = () => {
  searchedList.innerHTML = "<li class='movie-list-item'>No movie found</li>";
};

input.addEventListener("input", (ev) => {
  const searchWord = ev.target.value.toLowerCase().trim();
  if (searchWord.length !== 0) {
    setTimeout(() => fetchMovies(searchWord), 500);
  } else {
    searchedList.innerHTML = "";
    // writeNoResults();
  }
});

//---RATED MOVIES---//

document.addEventListener("DOMContentLoaded", async () => {
  let page = 4;
  let fetchedMovies = [];

  async function ratedMovies() {
    try {
      const data = await fetch(
        `${baseUrl}?apikey=${apiKey}&s=movie&page=${page}`
      );
      const response = await data.json();
      fetchedMovies = response.Search;

      const sliced = fetchedMovies.slice(0, 4);

      sliced.forEach(async (element) => {
        // console.log(element);

        const aboutMovies = await fetch(
          `${baseUrl}?apikey=${apiKey}&i=${element.imdbID}&plot=full`
        );
        const movieResponse = await aboutMovies.json();
        // console.log(movieResponse);-------------------
        const rating = movieResponse.imdbRating;
        const starRating = manageRating(movieResponse.imdbRating);
        const description = truncateDescription(movieResponse.Plot);
        const topRatedContainer = document.getElementById(
          "top-rated-container"
        );
        const card = document.createElement("div");
        card.classList.add("posterCard");
        card.innerHTML = `
        <img src="${movieResponse.Poster}" alt="poster">
        <h2>${movieResponse.Title}</h2>
        <span class="topRatedStars">${starRating}</span>
        <span class ="topRatedDate">${movieResponse.Year}</span>
        <p class ="topRatedDescription">${description} </p>
        <div class="rating">${rating}</div>
        `;
        card.addEventListener("click", () => {
          seeMovieDetails(element.imdbID);
        });
        topRatedContainer.appendChild(card);
      });
    } catch (error) {
      console.log(error);
    }
  }

  ratedMovies();
});

function manageRating(rat) {
  const roundedRating = Math.round(parseFloat(rat) / 2);
  let stars = "";
  for (let i = 0; i < roundedRating; i++) {
    stars += "&#9733";
  }
  for (let i = roundedRating; i < 5; i++) {
    stars += "&#9734";
  }
  return stars;
}

const maxlength = 100;

function truncateDescription(desc) {
  return desc.length < maxlength ? desc : desc.slice(0, maxlength) + "...";
}

//---FILM DETAILS---//
const seeMovieDetails = async (id) => {
  try {
    const data = await fetch(`${baseUrl}?apikey=${apiKey}&i=${id}&plot=full`);
    const response = await data.json();
    const newTab = window.open("details.html", "_blank");
    newTab.onload = function () {
      newTab.document.getElementById("background-image").src = response.Poster;
      newTab.document.querySelector(".movieName").innerText = response.Title;
      newTab.document.getElementById("detailsStars").innerHTML = manageRating(
        response.imdbRating
      );

      newTab.document.getElementById("movieDescription").innerText =
        response.Plot;
      newTab.document.getElementById("detailsPoster").src = response.Poster;
    };
  } catch (error) {
    console.log(error);
  }
};
