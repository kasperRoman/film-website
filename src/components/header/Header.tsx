import React, { useEffect, useRef } from "react";
import styles from "./header.module.scss";
import logo from "../../assets/images/tmovie.png";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../../types/NavItem";

const headerNav:NavItem[] = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);
  const active:number = headerNav.findIndex((e) => e.path === pathname);
  
      useEffect(() => {
    const shrinkHeader = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (!headerRef.current) return;

      if (scrollY > 100) {
        headerRef.current.classList.add(styles.shrink);
      } else {
        headerRef.current.classList.remove(styles.shrink);
      }
    };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.logo}>
          <img src={logo} alt="Movies logo" />
          <Link to="/">Movies</Link>
        </div>
        <ul className={styles.nav}>
          {headerNav.map((element, index) => (
            <li key={index} className={`${styles.item} ${index === active ? styles.active :""}`}>
              <Link to={element.path}>{element.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
