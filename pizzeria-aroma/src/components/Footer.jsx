import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Pizzeria Aroma. All rights reserved.</p>
        <p>📍Lützer Straße 14, 34439 Willebadessen</p>
        <p>📞05644/3059965</p>
    </footer>
  );
};

export default Footer;