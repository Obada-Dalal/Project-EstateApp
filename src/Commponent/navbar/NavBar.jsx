import "./NavBar.css";
import { useState } from "react";
import { PiSignOutThin } from "react-icons/pi";
import { PiSignInBold } from "react-icons/pi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/logo.png";

const arrayLi = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Pricing", link: "/pricing" },
  { id: 6, name: "Contact", link: "/contact" }
];

export default function NavBar() {
  const [showtags, setshowtags] = useState(false);
  const [animation, setAnimation] = useState(""); // "show" أو "hide"

  function handeltags() {
    setshowtags(true);
    setAnimation("show");
  }

  function closeTags() {
    setAnimation("hide"); // شغّل أنميشن الإغلاق
  }
  return (
    <div className="Box">
      <div className="continer continerNavBar">
        <div className="BoxNavBar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="MainTags">
            <div className="BoxUl">
              <ul>
                <HashLink smooth to="/#Home" className="Link">
                  <li>Home</li>
                </HashLink>
                <HashLink smooth to="/about#About">
                  <li>About</li>
                </HashLink>
                <HashLink smooth to="/services#Services">
                  <li>Services</li>
                </HashLink>
                <HashLink smooth to="/blog#Blog">
                  <li>Blog</li>
                </HashLink>
                <HashLink smooth to="/pricing#Pricing">
                  <li>Pricing</li>
                </HashLink>
                <HashLink smooth to="/contact#Contact">
                  <li>Contact</li>
                </HashLink>
              </ul>
            </div>
          </div>
          <div className="SignIn">
            <div className="BoxSignIn">
              <button>
                <PiSignInBold className="iconNavBarButtoon" />
                Sign In
              </button>
              <PiDotsThreeOutlineVerticalFill
                className="DotsIcon"
                onClick={handeltags}
                style={{ display: showtags ? "none" : "block" }}
              />
            </div>
          </div>
        </div>
      </div>
      {showtags && (
        <div
          className={`tagsTow ${
            animation === "show" ? "animateShow" : "animateHide"
          }`}
          onAnimationEnd={() => {
            if (animation === "hide") {
              setshowtags(false); // أخفي العنصر بعد انتهاء الأنميشن
            }
          }}
        >
          <div className="divClosTags">
            <IoCloseCircleSharp className="Closeicon" onClick={closeTags} />
          </div>

          <ul>
            {arrayLi.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  // className={activ === id ? "activ" : ""}
                  onClick={closeTags}
                  to={link}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
