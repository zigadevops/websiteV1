import classes from "./Header.module.css";
import { useWindowDimensions } from "../../utils/hooks/useWindowDimensions";
import Navbar from "./Navbar";
import { useRef } from "react";

const Header = () => {
  const { width } = useWindowDimensions();
  const comingSoonRef = useRef(null);

  return (
    <div
      className={classes.header}
      style={{
        background: `url(
          ${width > 1227 ? "/Backgrounds/1.png" : "/mobile_bg/1.png"}
        )`,
      }}>
      <Navbar />
      <div className={classes.content}>
        <div>
          <img className={classes.logo} src='/logo.png' alt='' />
          <p className={classes.desk}>
            The next big epic project is here under the creative <br />{" "}
            direction of Romeo Lacoste and a powerful team, aiming
            <br /> to make a huge impact in the web3 space.
          </p>
          <p className={classes.mob}>
            The next big epic project is here under the
            <br /> creative direction of Romeo Lacoste and a <br />
            powerful team, aiming to make a huge impact
            <br /> in the web3 space.
          </p>
          <button
            className={classes.btn}
            onMouseOver={() => (comingSoonRef.current.style.display = "flex")}
            onMouseOut={() => (comingSoonRef.current.style.display = "none")}>
            MINT NOW
          </button>
          <div className={classes.comingSoon} ref={comingSoonRef}>
            Coming Soon
          </div>
        </div>
        <div>
          <img className={classes.img} src='/Monsters/monster1.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
