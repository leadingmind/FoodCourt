import './App.css';
import AppHeader from "./components/appheader";
import BottomNavigation from "./components/bottomnavigation";
import Main from "./components/routes";

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <Main />
      <BottomNavigation />
    </div>
  );
}
