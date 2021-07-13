import { Switch, Route } from "react-router-dom";
import { Burger, Home } from "../pages";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/item" component={Burger} />
  </Switch>
);

export default Main;
