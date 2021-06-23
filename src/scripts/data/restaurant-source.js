import API from "../globals/api";

class RestaurantDataSource {
  static async getRestaurants() {
    const response = await fetch(API.restaurants);
    return response.json();
  }

  static async getRestaurantById(id) {
    const response = await fetch(API.restaurant(id));
    return response.json();
  }
}

export default RestaurantDataSource;
