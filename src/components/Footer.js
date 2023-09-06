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
            <a href='https://links.zigamonsters.com' target='_blank'>
            
            <img title='Coming Soon' src='/SVGIcons/ft1.svg' alt='' />

            </a>
            <a href='https://links.zigamonsters.com' target='_blank'>
              <img src='/SVGIcons/ft2.svg' alt='' />
            </a>

            <a href="https://links.zigamonsters.com" target='_blank'>
            <img title='Coming Soon' src='/SVGIcons/ft3.svg' alt=''  />
            </a>
            <a href="https://links.zigamonsters.com" target='_blank'>
            <img title='Coming Soon' src='/SVGIcons/ft4.svg' alt='' />
            </a>
          </div>
          <div className={classes.uldiv}>
            <ul>
              <Link href='#navbar'>
                <li> About&nbsp;|&nbsp;</li>{" "}
              </Link>
              <Link href='https://zigadex.zigamonsters.com '>
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
              <Link href='https://white-paper.zigamonsters.com/ '>
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
