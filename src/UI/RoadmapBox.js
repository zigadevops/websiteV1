import classes from "../components/Roadmap.module.css";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { useState, useRef } from "react";

const RoadmapBox = ({ label, points, className }) => {
  const [isShown, setIsShown] = useState(false);
  const box = useRef(null);
  return (
    <div
      onClick={() => {
        setIsShown(!isShown);
        isShown
          ? box.current.classList.remove(className)
          : box.current.classList.add(className);
      }}
      ref={box}
      className={classes.ui}
      style={{
        cursor: "pointer",
      }}>
      <div className={classes.heading}>
        <p>{label}</p>
        {isShown ? (
          <HiOutlineChevronUp
            style={{
              color: isShown ? "#082630" : "#69F6CA",
              backgroundColor: isShown ? "#69F6CA" : "#082630",
            }}
            onClick={() => setIsShown(!isShown)}
            className={classes.icon}
          />
        ) : (
          <HiOutlineChevronDown
            style={{
              color: isShown ? "#082630" : "#69F6CA",
              backgroundColor: isShown ? "#69F6CA" : "#082630",
            }}
            onClick={() => setIsShown(!isShown)}
            className={classes.icon}
          />
        )}
      </div>

      <div className={classes.paragraph}>
        {points.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={
                  item.isTick ? "/SVGIcons/tick.png" : "/SVGIcons/circle.png"
                }
                alt=''
              />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapBox;
