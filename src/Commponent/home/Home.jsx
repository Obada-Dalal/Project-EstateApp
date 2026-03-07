import "./Home.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import FeaturedPropertyTypes from "../featuredpropertytypes/FeaturedPropertyTypes";
import BoxSpace from "../boxSpace/BoxSpace";
import RecentPropertyListed from "../recentpropertylisted/RecentPropertyListed";
import OurAwards from "../ourAwards/OurAwards";
import ExploreByLocation from "../explorebylocation/ExploreByLocation";
import OurFeaturedAgents from "../ourfeaturedagents/OurFeaturedAgents";
import SelectYourPackage from "../selectyourpackage/SelectYourPackage";
export default function Home() {
  const [inputHome, setinputHome] = useState({
    Lcation: "",
    Propertytype: "",
    PriceRange: ""
  });

  function handltextLcation(e) {
    setinputHome({ ...inputHome, Lcation: e.target.value });
  }
  function handltextPropertytype(e) {
    setinputHome({ ...inputHome, Propertytype: e.target.value });
  }
  function handltextPriceRange(e) {
    setinputHome({ ...inputHome, PriceRange: e.target.value });
  }

  return (
    <>
      <div className="Box">
        <div className="continer continerMainSection">
          <div className="BoxMainSection">
            <div className="TextMainSection">
              <h1>Search Your Next Home</h1>
              <p>Find new & featured property located in your local city</p>
            </div>
            <div className="BoxSearchMainSection">
              <form>
                <div>
                  <label>City/Street</label>
                  <input
                    type="text"
                    value={inputHome.Lcation}
                    onChange={handltextLcation}
                    placeholder="Location"
                  ></input>
                </div>
                <div>
                  <label>Property Type</label>
                  <input
                    type="text"
                    value={inputHome.Propertytype}
                    onChange={handltextPropertytype}
                    placeholder="Property Type"
                  ></input>
                </div>
                <div>
                  <label>Price Range</label>
                  <input
                    type="text"
                    value={inputHome.PriceRange}
                    onChange={handltextPriceRange}
                    placeholder="Price Range"
                  ></input>
                </div>
                <label>Advance Filter</label>
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BoxSpace
        title="Featured Property Types"
        dis="Find All Type of Property."
      />
      <FeaturedPropertyTypes />
      <BoxSpace
        title="Recent Property Listed"
        dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <RecentPropertyListed />
      <OurAwards />
      <BoxSpace
        title="Explore By Location"
        dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <ExploreByLocation />
      <BoxSpace
        title="Our Featured Agents"
        dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <OurFeaturedAgents />
      <BoxSpace
        title="Select Your Package"
        dis="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <SelectYourPackage />
    </>
  );
}
