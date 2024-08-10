import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import Menuicon from "../../../assets/nav/menuicon.png";
// import CloseIcon from "../../../assets/nav/CloseIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Amit Gupta
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "./assets/nav/CloseIcon.png" : "./assets/nav/menuicon.png"}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        ></img>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
