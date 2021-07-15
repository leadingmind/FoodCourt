import "./css/menuscroll.css";
import Card from "react-bootstrap/Card";
import item from "../asset/data.js";
import { Link } from "react-router-dom";

const FoodCard = (props) => (
  <div className="col-md-2 col-sm-3 col-xs-5">
    <Card>
      <Card.Img
        style={{ width: props.width, margin: "auto" }}
        variant="top"
        src={require(props.imgsrc)}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);

export default function Menuscroll() {
  return (
    <div className="container-fluid">
      <h3 className="subtitle">
        Our improvised <span>Menus</span>
      </h3>
      <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
        {item.map((singleItem) => (
          <Link to={`/item/${singleItem.name}`} key={singleItem.id}>
            <FoodCard
              imgsrc={singleItem.thumbnail}
              title={singleItem.name}
              width="50px"
              height="auto"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
