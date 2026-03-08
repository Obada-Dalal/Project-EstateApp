import "./Services.css"
import FeaturedPropertyTypes from "../featuredpropertytypes/FeaturedPropertyTypes";
export default function services () {
  return (
    <div className="Box" id="Services">
      <div className="continer continerservices">
        <div className="backgrounMainservices">
          <div className="TextMain">
            <p>Services</p>
            <h3>Services -All Services</h3>
          </div>
        </div>
        <div className="BoxServices">
          <FeaturedPropertyTypes />
        </div>
      </div>
    </div>
  );
}