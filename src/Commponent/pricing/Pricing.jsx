import "./Pricing.css" 
import SelectYourPackage from "../selectyourpackage/SelectYourPackage";
export default function Pricing () {
  return (
    <div className="Box" id="Pricing">
      <div className="continer continerPricing">
        <div className="backgrounMainPricing">
          <div className="TextMain">
            <p>Blog</p>
            <h3>Blog Grid - Our Blogs</h3>
          </div>
        </div>
        <div className="BoxPricing">
          <SelectYourPackage/>
        </div>
      </div>
    </div>
  );
}