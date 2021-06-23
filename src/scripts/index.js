import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import dataSource from "./../DATA.json";
const menu = document.querySelector("#menu");
const jumbotron = document.querySelector(".jumbotron");
const drawer = document.querySelector("#drawer");
const closeEl = document.querySelector("#close");
let contents = "";

menu.addEventListener("click", function(event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

jumbotron.addEventListener("click", function() {
  drawer.classList.remove("open");
});

closeEl.addEventListener("click", function() {
  drawer.classList.remove("open");
});

dataSource.restaurants.forEach(restaurant => {
  contents += `
            <article class="post">
                <div class="post__thumbnail">
                    <h2><i class="fas fa-star"></i>${restaurant.rating}</h2>
                    <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
                </div>
                <div class="post__content">
                    <h2 class="post__rating"><i class="fas fa-map-marker-alt"></i>${restaurant.city}</h2>
                    <h1 class="post__title"><a href="#">${restaurant.name}</a></h1>
                    <p class="post__description">
                        ${restaurant.description}
                    </p>
                </div>
            </article>
    `;
});

document.querySelector(".posts").innerHTML = contents;
