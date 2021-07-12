import "./css/menuscroll.css";
import Card from "react-bootstrap/Card";
import burger from "../asset/images/burger.jpg";
import momo from "../asset/images/momo.jpg";
import drumsticks from "../asset/images/drumsticks.jpg";
import wings from "../asset/images/wings.jpg";

const FoodCard = (props) => (
  <div class="col-md-2 col-sm-3 col-xs-5">
    <Card>
      <Card.Img
        style={{ width: props.width, margin: "auto" }}
        variant="top"
        src={props.imgsrc}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);

export default function Menuscroll() {
  return (
    <div class="container-fluid">
      <h3 class="subtitle">
        Our improvised <span>Menus</span>
      </h3>
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
        <FoodCard imgsrc={burger} title="Burgers" width="50px" height="auto" />
        <FoodCard imgsrc={momo} title="Momos" width="50px" height="auto" />
        <FoodCard
          imgsrc={drumsticks}
          title="Drumstick"
          width="50px"
          height="auto"
        />
        <FoodCard imgsrc={wings} title="Wings" width="50px" height="auto" />
      </div>
    </div>
  );
}
