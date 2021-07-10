import "./styles.css";
import ImageSlider from "./components/imageslider";
import MenuScroll from "./components/menuscroll";
import AppHeader from "./components/appheader";
import FixedButtons from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <ImageSlider />
      <MenuScroll />
      <FixedButtons />
    </div>
  );
}
