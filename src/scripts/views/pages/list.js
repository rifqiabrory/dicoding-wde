import RestaurantDataSource from "../../data/restaurant-source";
import itemTemplate from "../templates/item-template-creator";

const List = {
  async render() {
    return `
      <section class="content">
            <div class="explore">
                <h1 class="explore__label">Explore Restaurant</h1>
                <div class="posts"></div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const postsContainer = document.querySelector(".posts");
    try {
      const response = await RestaurantDataSource.getRestaurants();
      const { restaurants } = response;
      restaurants.forEach((restaurant) => {
        postsContainer.innerHTML += itemTemplate(restaurant);
      });
    } catch (error) {
      console.log("An error has accured at ::", error);
    }
  },
};

export default List;
