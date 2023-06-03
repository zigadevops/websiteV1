import classes from "./Team.module.css";
import { useWindowDimensions } from "../../utils/hooks/useWindowDimensions";

const Team = () => {
  const { width } = useWindowDimensions();
  return (
    <div
      className={classes.team}
      style={{
        background: `url(
        ${width > 1227 ? "/Backgrounds/4.png" : "/mobile_bg/3.png"}
      )`,
      }}>
      <h2>The ZigaMonsters Team</h2>
      <div className={classes.content}>
        <div>
          <img src='/SVGIcons/tm1.svg' alt='' />
          <h3>Romeo Lacoste</h3>
          <h4>Founder</h4>
        </div>
        <div>
          <img src='/SVGIcons/tm2.svg' alt='' />
          <h3>Jayson Sanchez</h3>
          <h4>Founder</h4>
        </div>
        <div>
          <img src='/SVGIcons/tm3.svg' alt='' />
          <h3>David Tenx</h3>
          <h4>Community Lead</h4>
        </div>
        <div>
          <img src='/SVGIcons/tm4.svg' alt='' />
          <h3>James Dickson</h3>
          <h4>Marketing Advisor</h4>
        </div>
      </div>
    </div>
  );
};

export default Team;
