import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.left}>
          <img src='/logo.png' alt='' />
          <a href='#dragon'>MINT DROP 1 NOW</a>
        </div>
        <div className={classes.right}>
          <div className={classes.images}>
            <img title='Coming Soon' src='/SVGIcons/ft1.svg' alt='' />
            <a href='https://twitter.com/zigamonsters' target='_blank'>
              <img src='/SVGIcons/ft2.svg' alt='' />
            </a>
            <img title='Coming Soon' src='/SVGIcons/ft3.svg' alt='' />
            <img title='Coming Soon' src='/SVGIcons/ft4.svg' alt='' />
          </div>
          <div className={classes.uldiv}>
            <ul>
              <Link href='#navbar'>
                <li> About&nbsp;|&nbsp;</li>{" "}
              </Link>
              <Link href='#navbar'>
                <li> Zigadex&nbsp;|&nbsp;</li>
              </Link>
              <Link href='#roadmap'>
                {" "}
                <li> Roadmap </li>
              </Link>
            </ul>

            <ul>
              <Link href='#contact'>
                <li> Contact&nbsp;|&nbsp;</li>
              </Link>
              <Link href='https://whitepaper.zigamonsters.com/'>
                <li> Whitepaper&nbsp;|&nbsp;</li>
              </Link>
              <Link href='https://zigamonsters.com/promoslides'>
                <li> Pitchdeck </li>
              </Link>
            </ul>
          </div>
          <a href='mailto:contact@zigamonsters.com'>
            {" "}
            <span>contact@zigamonsters.com</span>
          </a>
        </div>
      </div>
      <p>ZigaMonsters © Copyright 2023 | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
