import { FileUser, HeartHandshake, House, PhoneCall } from "lucide-react";
import { Link } from "react-router";

import "./Navbar.css";
const NavConfig=[
  {
    name:"home",
    icon:<House className="menu-icon"/>,
    title:"Home",
    path:"/"
  },
  {
    name:"about",
    icon:<FileUser className="menu-icon"/>,
    title:"About",
    path:"/about"
  },
  {
    name:"ourservice",
    icon:<PhoneCall className="menu-icon"/>,
    title:"Our Service",
    path:"/ourservice"
  },
  {
    name:"contact",
    icon:<HeartHandshake className="menu-icon"/>,
    title:"Contact",
    path:"/contact"
  }
]
function Navbar({ active }) {
  return (
    <div className="navbar">
      {NavConfig.map((menuItem,index)=>{
        return (
          <Link to={menuItem.path} className={`menu-item ${active === menuItem.name ? "active-menu" : ""}`}
          key={index}>
            {menuItem.icon}
            {menuItem.title}
            </Link>
        );
      })}
    </div>
  )
}

export default Navbar;