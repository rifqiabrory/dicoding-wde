import likeButton from "../views/templates/like-button-template-creator";
import unlikeButton from "../views/templates/unlike-button-template-creator";

const FavoriteInitiator = {
  async init({ likeButtonContainer, favoriteRestaurant, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurant = favoriteRestaurant;
    this._restaurant = data;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = likeButton();

    const likeButtonEl = document.querySelector("#likeButton");
    likeButtonEl.addEventListener("click", async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
      alert("New Favorite Restaurant Successfully Added.");
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = unlikeButton();

    const likeButtonEl = document.querySelector("#likeButton");
    likeButtonEl.addEventListener("click", async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
      alert("Your Favorite Restaurant Already Removed.");
    });
  },
};

export default FavoriteInitiator;
