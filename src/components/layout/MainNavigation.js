import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigattion() {
  return (
    <header className={classes.header}>
      <div>SUPPLY CHAIN CONSULTING GROUP</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/consulting-services">Consulting Services</Link>
          </li>
          <li>
            <Link to="/industries-served">Industries Served</Link>
          </li>
          <li>
            <Link to="/our-progress">Our Progress</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigattion;
