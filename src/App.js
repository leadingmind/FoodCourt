import "./styles.css";
import AppHeader from "./components/appheader";
import FixedButtons from "./components/bottomnavigation";
import Burger from './pages/burger';

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* <ImageSlider />
      <MenuScroll /> */}
      <Burger />
      <FixedButtons />
    </div>
  );
}
