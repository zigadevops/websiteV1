import classes from "./cards.module.css";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

const Cards = () => {
  const comingSoonRef = useRef();
  return (
    <>
      <div className={classes.cards}>
        <Marquee pauseOnHover={true}>
          <div>
            <img src='/Cards/card1.png' alt='' />
          </div>
          <div>
            <img src='/Cards/card2.png' alt='' />
          </div>
          <div>
            <img src='/Cards/card3.png' alt='' />
          </div>
          <div>
            <img src='/Cards/card4.png' alt='' />
          </div>
          <div>
            <img src='/Cards/card5.png' alt='' />
          </div>
          <div>
            <img src='/Cards/card6.png' alt='' />
          </div>
          <div>
            <img src='/Cards/card7.png' alt='' />
          </div>
          <div>
            <img src='/Cards/card8.png' alt='' />
          </div>
        </Marquee>
      </div>

      <div className={classes.btnDiv}>
        <button
          className={classes.btn}
          onMouseOver={() => (comingSoonRef.current.style.opacity = "1")}
          onMouseOut={() => (comingSoonRef.current.style.opacity = "0")}>
          EXPLORE ZIGADEX
        </button>
        <div className={classes.comingSoon} ref={comingSoonRef}>
          Coming Soon
        </div>
      </div>
    </>
  );
};

export default Cards;
