import React from "react";
import { FaShekelSign, FaInfoCircle, FaHeadset, FaUser } from "react-icons/fa";
export default function NavBar() {
  return (
    <>
      <div className="sidebar">
        <a href="/pricing" className="sidebar-item">
          <FaShekelSign className="icon" />
          <span>מחירון</span>
        </a>
        <a href="/guide" className="sidebar-item">
          <FaInfoCircle className="icon" />
          <span>קצת עלינו</span>
        </a>
        <a href="/contact" className="sidebar-item">
          <FaHeadset className="icon" />
          <span>צור קשר</span>
        </a>
      
      </div>
    </>
  );
}
