import "./css/menuscroll.css";
import Card from 'react-bootstrap/Card'
import burger from "../asset/images/image/burger-icon.png";

const FoodCard = (props) => (
  // <div className="col-5">
  //   <div className="card card-block card-1">
  //     <a href="#">
  //       <div className="title">{props.title}</div>
  //     </a>
  //   </div>
  // </div>
  <div class="col-5">
    <Card>
      <Card.Img variant="top" src={props.imgsrc}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>   
	</div> 
);

export default function Menuscroll() {
  return (
    <div class="container-fluid">
      <h3 class="subtitle">Our improvised <span>Menus</span></h3>
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
        <FoodCard imgsrc={burger} title="Burger" width="50px" height="auto" />
        <FoodCard imgsrc={burger} title="Burger" width="50px" height="auto" />
        <FoodCard imgsrc={burger} title="Burger" width="50px" height="auto" />
        <FoodCard imgsrc={burger} title="Burger" width="50px" height="auto" />
        <FoodCard imgsrc={burger} title="Burger" width="50px" height="auto" />
      </div>
    </div>
  );
}
