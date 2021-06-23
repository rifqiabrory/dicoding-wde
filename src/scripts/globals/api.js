import CONFIG from "./config";

const API = {
  restaurants: `${CONFIG.BASE_URL}/list`,
  restaurant: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API;
