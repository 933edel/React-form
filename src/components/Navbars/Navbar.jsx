import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={`${styles.navbar}`}>
        <div>
          <img
            className={`${styles.navbar_logo}`}
            src="/images/myillustration.png"
            alt="Logo"
          />
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
