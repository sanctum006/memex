import React from "react";
import "./Footer.css";

function Footer({ mode }) {
  return (
    <div>
      <div className={`footer navbar-dark ${mode ? "bg-footer-custom" : "bg-dark"}`}>
        <div className="footer-icons">
          <a href="https://linkedin.com/in/pushpendra-yadav-1057"><i className="fab fa-linkedin footer-icon" style={{color: `${mode ? "#0077b5" : "white"}`}}></i></a>
          <a href="https://github.com/sanctum006"><i className="fab fa-github footer-icon" style={{color: `${mode ? "#000" : "white"}`}}></i></a>
        </div>
        <h3 className="footer-text" style={{color: `${mode ? "#000" : "#fff"}`, fontWeight: "400"}}>Made By Pushpendra Yadav</h3>
      </div>
    </div>
  );
}

export default Footer;
