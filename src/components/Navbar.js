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
      { name: "Lore", link: "https://story.zigamonsters.com" },
      { name: "Whitepaper", link: "https://white-paper.zigamonsters.com/ " },
      { name: "Pitchdeck", link: "https://zigamonsters.com/promoslides" },
    ],
    isComingSoon: false,
  },
  { name: "Zigadex", index: 1, link: "https://zigadex.zigamonsters.com " },
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

          <a href="https://links.zigamonsters.com" target="_blank">

            <img
              // onClick={() => router.push("https://twitter.com/zigamonsters")}
              src='/SVGIcons/twittermenubar.svg'
              alt=''
            />
          </a>

          <a href="https://links.zigamonsters.com" target="_blank">

            <img
            
              src='/SVGIcons/discordmenubar.svg'
              alt=''
            />
            
          </a>

          <a href="https://links.zigamonsters.com" target="_blank">

   
            <img
             
              src='/SVGIcons/telegrammenubar.svg'
              alt=''
            />
           </a>
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
