import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import SingleItem from "../pages/singleitem";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/item/:id" component={SingleItem} />
  </Switch>
);

export default Main;
