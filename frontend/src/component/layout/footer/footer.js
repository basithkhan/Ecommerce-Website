import React from "react";
import playStore from "../../../../src/images/playstore.png";
import appStore from "../../../../src/images/appstore.png";
import "./footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App For Android and IOS Mobile Phones</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>E-Commerce</h1>
        <p>High Quality Is Our First Priority</p>
        <p>copyrights 2023 &copy; BasithKhan</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us On</h4>
        <a href="http://instagram.com/basithkhan09">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
