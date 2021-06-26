import RestaurantDataSource from "../../data/restaurant-source";
import ItemTemplate from "../templates/item-template-creator";
import Spinner from "../templates/spinner-template-creator";

const Home = {
  async render() {
    return `
        <section class="content">
          <div class="explore">
            <h1 class="explore__label">Explore Restaurant</h1>
            <div id="loading"></div>
            <div class="posts"></div>
          </div>
        </section>
    `;
  },

  async afterRender() {
    const postsContainer = document.querySelector(".posts");
    const loading = document.querySelector("#loading");
    loading.innerHTML = Spinner();
    try {
      const response = await RestaurantDataSource.getRestaurants();
      const { restaurants } = response;
      restaurants.forEach((restaurant) => {
        postsContainer.innerHTML += ItemTemplate(restaurant);
      });
      loading.style.display = "none";
    } catch (error) {
      loading.style.display = "none";
      console.log("An error has accured at ::", error);
    }
  },
};

export default Home;
