import RestaurantIdb from "../../data/restaurant-idb";
import itemTemplate from "../templates/item-template-creator";

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="explore">
                <h1 class="explore__label">My Favorites Restaurant</h1>
                <div class="posts"></div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const postsContainer = document.querySelector(".posts");
    try {
      const restaurants = await RestaurantIdb.getAllRestaurants();
      if (restaurants.length < 1) {
        postsContainer.classList.remove("posts");
        postsContainer.classList.add("empty-wrapper");
        postsContainer.innerHTML = `
                <div class="favorite-empty"></div>
                <p>You don't have any Favorite Cafe or Restaurant!</p>
            `;
      }
      restaurants.forEach((restaurant) => {
        postsContainer.innerHTML += itemTemplate(restaurant);
      });
    } catch (error) {
      console.log("An error has accured at ::", error);
    }
  },
};

export default Favorite;
