import { Link } from 'react-router';
import './Navbar.css';
function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;
        <Link to="/ourservice">Our Service</Link>&nbsp;|&nbsp;
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar;