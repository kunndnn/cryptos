import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Copyright @ {new Date().getFullYear()}, Crypto - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
