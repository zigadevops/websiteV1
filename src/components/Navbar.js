import classes from "./Navbar.module.css";
import NavItems from "../UI/NavItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const navbarData = [
  {
    name: "About",
    index: 0,
    innerChild: [
      { name: "Lore", link: "https://lore.zigamonsters.com/" },
      { name: "Whitepaper", link: "https://whitepaper.zigamonsters.com/" },
      { name: "Pitchdeck", link: "https://zigamonsters.com/promoslides" },
    ],
    isComingSoon: false,
  },
  { name: "Zigadex", index: 1, isComingSoon: true },
  { name: "Roadmap", index: 2, isComingSoon: false, link: "#roadmap" },
  {
    name: "Contact",
    index: 3,
    isComingSoon: false,
    link: "#contact",
  },
];

const Navbar = () => {
  const [isMobileNavbarShown, setIsMobileNavbarShown] = useState(false);
  const comingSoon2 = useRef(null);
  const comingSoon3 = useRef(null);
  const router = useRouter();

  return (
    <>
      <nav className={classes.nav} id='navbar'>
        <div>
          <img src='/logo.png' alt='' className={classes.logo} />
        </div>

        <ul>
          {navbarData.map((item, index) => {
            return <NavItems item={item} key={index} />;
          })}
          <GiHamburgerMenu
            onClick={() => setIsMobileNavbarShown(true)}
            className={classes.hamburger}
          />
          <div className={classes.images}>
            <img
              onClick={() => router.push("https://twitter.com/zigamonsters")}
              src='/SVGIcons/twittermenubar.svg'
              alt=''
            />
            <img
              onMouseOver={() => (comingSoon2.current.style.display = "block")}
              onMouseOut={() => (comingSoon2.current.style.display = "none")}
              src='/SVGIcons/discordmenubar.svg'
              alt=''
            />
            <span className={classes.comingSoon2} ref={comingSoon2}>
              Coming Soon
            </span>
            <img
              onMouseOver={() => (comingSoon3.current.style.display = "block")}
              onMouseOut={() => (comingSoon3.current.style.display = "none")}
              src='/SVGIcons/telegrammenubar.svg'
              alt=''
            />
            <span className={classes.comingSoon3} ref={comingSoon3}>
              Coming Soon
            </span>
          </div>
        </ul>
      </nav>
      {isMobileNavbarShown && (
        <MobileNavbar setIsMobileNavbarShown={setIsMobileNavbarShown} />
      )}
    </>
  );
};

export default Navbar;
