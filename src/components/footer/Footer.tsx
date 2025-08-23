import React from "react";
import styles from "./footer.module.scss";
import bg from "../../assets/images/footer-bg.jpg";
import logo from "../../assets/images/tmovie.png";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer} style={{ backgroundImage: `url(${bg})` }}>
      <div className={clsx(styles.content, "container")}>
        <div className={styles.logoContent}>
          <div className={styles.logo}>
            <img src={logo} alt="Movies logo" />
            <Link to="/">Movies</Link>
          </div>
        </div>
        <div className={styles.menuContent}>
          <div className={styles.menu}>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className={styles.menu}>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className={styles.menu}>
            <Link to="/">You must watch</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
