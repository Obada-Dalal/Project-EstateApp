import "./RecentPropertyListed.css";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ArrayItems2 = [
  {
    id: 1,
    img: "/images/list/p-1.png",
    condition: "For Rent",
    iconheart: <FaHeart />,
    dis: "Red Carpet Real Estate",
    iconlocation: <FaLocationDot />,
    location: " 210 Zirak Road, Canada",
    pric: "$3,700",
    type: "Apartment"
  },
  {
    id: 2,
    img: "/images/list/p-2.png",
    condition: "For Sale",
    iconheart: <FaHeart />,
    dis: "Fairmount Properties",
    iconlocation: <FaLocationDot />,
    location: "5698 Zirak Road, NewYork",
    pric: "$9,750",
    type: "Condos"
  },
  {
    id: 3,
    img: "/images/list/p-7.png",
    condition: "For Rent",
    iconheart: <FaHeart />,
    dis: "The Real Estate Corner",
    iconlocation: <FaLocationDot />,
    location: " 5624 Mooker Market, USA",
    pric: "$5,860",
    type: "Offices"
  },
  {
    id: 4,
    img: "/images/list/p-4.png",
    condition: "For Sale",
    iconheart: <FaHeart />,
    dis: "Herringbone Realty",
    iconlocation: <FaLocationDot />,
    location: " 5621 Liverpool, London",
    pric: "$7,540",
    type: "Homes & Villas"
  },
  {
    id: 5,
    img: "/images/list/p-5.png",
    condition: "For Rent",
    iconheart: <FaHeart />,
    dis: "Brick Lane Realty",
    iconlocation: <FaLocationDot />,
    location: " 210 Montreal Road, Canada",
    pric: "$4,850",
    type: "Commercial"
  },
  {
    id: 6,
    img: "/images/list/p-6.png",
    condition: "For Sale",
    iconheart: <FaHeart />,
    dis: "Banyon Tree Realty",
    iconlocation: <FaLocationDot />,
    location: " 210 Zirak Road, Canada",
    pric: "$2,742",
    type: "Apartment"
  }
];

export default function RecentPropertyListed() {
  return (
    <div className="Box">
      <div className="continer continerRecentPropertyListed">
        <div className="BoxRecentPropertyListed">
          {ArrayItems2.map(
            ({
              id,
              img,
              condition,
              iconheart,
              dis,
              iconlocation,
              location,
              pric,
              type
            }) => (
              <div key={id} className="BoxArrayItems2">
                <div className="card">
                  <img src={img}></img>
                  <div className="conditionANDiconheart">
                    <h4
                      style={{
                        color: condition === "For Rent" ? "green" : "orange",
                        background:
                          condition === "For Rent"
                            ? "rgba(169, 252, 158, 0.568)"
                            : "rgba(248, 206, 91, 0.568)"
                      }}
                    >
                      {condition}
                    </h4>
                    <p>{iconheart}</p>
                  </div>
                  <div className="disANDlocation">
                    <h3>{dis}</h3>
                    <div className="Location">
                      {iconlocation}
                      <h4>{location}</h4>
                    </div>
                  </div>
                  <hr/>
                  <div className="pricANDtype">
                    <p>{pric}</p>
                    /sqft
                    <h3>{type}</h3>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
