import "./css/menuscroll.css";

const FoodCard = (props) => (
  <div className="col-5">
    <div className="card card-block card-1">
      <a href="#">
        <div className="title">{props.title}</div>
      </a>
    </div>
  </div>
);

export default function Menuscroll() {
  return (
    <>
      <div className="container-fluid">
        <h3 className="subtitle">
          Our improvised <span>Menus</span>
        </h3>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
          <FoodCard title="Burger" />
          <FoodCard title="Momo" />
          <FoodCard title="Drumsticks" />
          <FoodCard title="Wings" />
          <FoodCard title="menu5" />
        </div>
      </div>
    </>
  );
}
