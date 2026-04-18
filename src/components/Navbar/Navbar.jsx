import { FileUser, HeartHandshake, House, PhoneCall } from "lucide-react";
import { Link } from "react-router";

import "./Navbar.css";
function Navbar({ active }) {
    console.log(active);
  return (
    <div className="navbar">
        <Link to="/" className={`menu-item ${active === "home" ? "active-menu" : ""}`}><House className="menu-icon"/>Home</Link>&nbsp;&nbsp;
        <Link to="/about" className={`menu-item ${active === "about" ? "active-menu" : ""}`}><FileUser className="menu-icon"/>About</Link>&nbsp;&nbsp;
        <Link to="/ourservice" className={`menu-item ${active === "ourservice" ? "active-menu" : ""}`}><PhoneCall className="menu-icon"/>Our Service</Link>&nbsp;&nbsp;
        <Link to="/contact" className={`menu-item ${active === "contact" ? "active-menu" : ""}`}><HeartHandshake className="menu-icon"/>Contact</Link>
            
    </div>
  )
}

export default Navbar;