import RestaurantDataSource from "../../data/restaurant-source";
import itemDetailTemplate from "../templates/item-detail-template-creator";
import UrlParser from "../../routes/url-parser";
import RestaurantIdb from "../../data/restaurant-idb";
import FavoriteButton from "../../utils/favorite-initiator";

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector("#restaurant");
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const response = await RestaurantDataSource.getRestaurantById(url.id);
      const { restaurant } = response;
      restaurantContainer.innerHTML = itemDetailTemplate(restaurant);
      await FavoriteButton.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRestaurant: RestaurantIdb,
        data: restaurant,
      });
    } catch (error) {
      console.log("An error has accured at ::", error);
    }
  },
};

export default Detail;
