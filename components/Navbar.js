import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Button from "../components/Button";
import { FaBars } from 'react-icons/fa'
import { useState } from "react";

const Navbar = () => {


  const [navExpanded, setNavExpanded] = useState(false);
  const hamburgerClick = () => setNavExpanded(!navExpanded);


  return (
    <nav className={styles.wrapper}>
      <Link href="/">
        <a>
          <div className={styles.logoText}>JustTips</div>
        </a>
      </Link>
      <div className={styles.dotsWrapper}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <div className={styles.navLinks}>
        <span className={styles.navlink}>
          <Link href="/tools">
            <a>Tools</a>
          </Link>
        </span>
        <Button href="/sendtip" text="send tip" />
      </div>
      <FaBars onClick={hamburgerClick} className={`${styles.bars} ${navExpanded ? styles.barsActive : ''}`} />
      <div className={`${styles.hamburgerMenu} ${navExpanded ? '' : styles.hamburgerNotVisible}`}>
        <HamburgerLink text="tools" href="/tools" />
        <HamburgerLink text="send tip" href="/sendtip" />
      </div>
    </nav>
  );
};

const HamburgerLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className={styles.hamburgerMenuLink}>{text}</a>
    </Link>
  )
}

export default Navbar;
