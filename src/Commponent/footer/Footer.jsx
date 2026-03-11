import "./Footer.css";
import LogoFooter from "../../../public/images/logo-light.png";

export default function Footer() {
  return (
    <div className="Box">
      <div className="continer continerFooter">
        <div className="BoxOne">
          <div className="TextOne">
            <div className="TextBoxOne">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <div className="buttonBoxOne">
              <p>Contact Us Today</p>
            </div>
          </div>
        </div>
        <div className="BoxMainTow">
          <div className="BoxTow">
            <div className="MainSiction">
              <div className="SectionOne">
                <img src={LogoFooter} />
                <h2>Do You Need Help With Anything?</h2>
                <p>
                  Receive updates, hot deals, tutorials, discounts sent straignt
                  in your inbox every month
                </p>
                <div className="input">
                  <input type="text"></input>
                  <button type="submit">Subscribe</button>
                </div>
              </div>
              <div className="SectionTow">
                <div className="ColumnOne">
                  <h2>LAYOUTS</h2>
                  <ul>
                    <li>Home Page</li>
                    <li>About Page</li>
                    <li>Service Page</li>
                    <li>Property Page</li>
                    <li>Contact Page</li>
                    <li>Single Blog</li>
                  </ul>
                </div>
                <div className="ColumnTow">
                  <h2>ALL SECTIONS</h2>
                  <ul>
                    <li>Headers</li>
                    <li>Features</li>
                    <li>Attractive</li>
                    <li>Testimonials</li>
                    <li>Videos</li>
                    <li>Footers</li>
                  </ul>
                </div>
                <div className="ColumnThree">
                  <h2>COMPANY</h2>
                  <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Affiliate</li>
                    <li>Login</li>
                    <li>Changelog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="End">
            <h3>
              &copy;<span>ObadaDalal</span> 2025 obadaeiddalal@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
