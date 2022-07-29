import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
};

export default Navbar;
