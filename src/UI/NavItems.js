import classes from "../components/Navbar.module.css";
import { useState, useRef } from "react";

const NavItems = ({ item }) => {
  const [activeNav, setActiveNav] = useState(false);
  const comingSoonRef = useRef(null);

  const similar = () => {
    return (
      <>
        {item.innerChild && activeNav && !item.isComingSoon && (
          <div
            className={classes.innerNavDiv}
            onMouseOver={() => setActiveNav(true)}
            onMouseOut={() => {
              setActiveNav(false);
            }}>
            {item.innerChild.map((item2, index2) => {
              return item2.link ? (
                <a href={item2.link} target='_blank'>
                  <span style={{ display: "block" }} key={index2}>
                    {item2.name}
                  </span>
                </a>
              ) : (
                <span style={{ display: "block" }} key={index2}>
                  {item2.name}
                </span>
              );
            })}
          </div>
        )}
        {item.isComingSoon && (
          <span ref={comingSoonRef} className={classes.comingSoon}>
            Coming Soon
          </span>
        )}
      </>
    );
  };
  return item.link ? (
    <a href={item.link}>
      <li onMouseOver={() => setActiveNav(true)}>
        {item.name}
        {similar()}
      </li>
    </a>
  ) : (
    <li
      onMouseOver={() => {
        if (comingSoonRef !== null && item.isComingSoon)
          comingSoonRef.current.style.display = "block";
        setActiveNav(true);
      }}
      onMouseOut={() => {
        if (comingSoonRef !== null && item.isComingSoon)
          comingSoonRef.current.style.display = "none";
      }}
      onClick={() => setActiveNav(!activeNav)}>
      {item.name}
      {similar()}
    </li>
  );
};

export default NavItems;
