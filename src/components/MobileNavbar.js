import classes from "./MobileNavbar.module.css";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

const MobileNavbar = ({ setIsMobileNavbarShown }) => {
  const [openBox, setOpenBox] = useState("");

  return (
    <div className={classes.background}>
      <div className={classes.top}>
        <div>
          <img className={classes.logo} src='/logo.png' alt='' />
        </div>
        <MdCancel
          onClick={() => setIsMobileNavbarShown(false)}
          className={classes.icon}
        />
      </div>
      <ul className={classes.links}>
        <li
          onClick={() => {
            openBox === "about" ? setOpenBox("") : setOpenBox("about");
          }}>
          About
        </li>
        {openBox === "about" && (
          <ul>
            <a href='https://lore.zigamonsters.com/'>
              <li>Lore</li>
            </a>
            <a href='https://whitepaper.zigamonsters.com/'>
              <li>Whitepaper</li>
            </a>
            <a href='https://zigamonsters.com/promoslides'>
              <li>Pitchdeck</li>
            </a>
          </ul>
        )}
        <li
          onClick={() => {
            openBox === "comingsoon"
              ? setOpenBox("")
              : setOpenBox("comingsoon");
          }}>
          Zigadex
        </li>
        {openBox === "comingsoon" && (
          <ul>
            <li style={{ listStyleType: "none", fontSize: "1.5rem" }}>
              Coming Soon
            </li>
          </ul>
        )}
        <a href='#roadmap'>
          <li onClick={() => setIsMobileNavbarShown(false)}>Roadmap</li>
        </a>
        <a href='contact'>
          <li onClick={() => setIsMobileNavbarShown(false)}>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default MobileNavbar;
