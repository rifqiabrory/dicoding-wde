import List from "../views/pages/list";
import Favorite from "../views/pages/favorite";
import Detail from "../views/pages/detail";

const routes = {
  "/": List,
  "/favorite": Favorite,
  "/detail/:id": Detail,
};

export default routes;
