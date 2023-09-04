import classes from "./Roadmap.module.css";
import RoadmapBox from "../UI/RoadmapBox";
import { useWindowDimensions } from "../../utils/hooks/useWindowDimensions";

const Roadmap = () => {
  const { width } = useWindowDimensions();
  return (
    <div
      className={classes.bg}
      id='roadmap'
      style={{
        background:
          width > 1227
            ? `url(
      ${"/Backgrounds/5.png"})`
            : "black",
      }}>
      <div className={classes.container}>
        <div>
          <h1>Roadmap</h1>
          <RoadmapBox
            label={"YEAR ONE - Foundation and Brand Building"}
            className={classes.box1}
            points={[
              { label: "Establish core elements of ZigaMonsters universe: characters, storyline, art style.", isTick: true },
              { label: "Develop engaging website and social media presence with teasers and trailers.", isTick: true },
              {
                label: "Community building and engagement through a series of Digital collectibles and releasing first Game Demo.",
                isTick: false,
              },
            ]}
          />
          <RoadmapBox
            label={"YEAR TWO - Expansion and Merchandising"}
            className={classes.box2}
            points={[
              {
                label: "Further Development of flagship multiplayer game.",
                isTick: false,
              },
              { label: "Expand the ZigaMonsters Story with the release of graphic novels.", isTick: false },
              { label: "Collaborate with merchandise partners for branded products.", isTick: false },
              { label: "Beta release of the ZigaMonsters multiplayer online game.", isTick: false },
            ]}
          />
          <RoadmapBox
            label={"YEAR THREE - Interactive Experiences and Gaming"}
            className={classes.box3}
            points={[
              {
                label: "Expand graphic novel collection with ongoing releases.",
                isTick: false,
              },
              {
                label: "Explore licensing opportunities for crossovers and partnerships.",
                isTick: false,
              },
              {
                label: "Big release of ZigaMonsters multiplayer online game.",
                isTick: false,
              },
              {
                label: "Pilot Episode for Animated Series.",
                isTick: false,
              },
              
            ]}
          />
          <RoadmapBox
            label={"YEAR FOUR - Global Expansion and Multimedia Presence"}
            className={classes.box4}
            points={[
              {
                label: "Maiden release of ZigaMonsters Trading Card Game.",
                isTick: false,
              },
              {
                label: "Secure distribution deals with streaming platforms for Animated Series.",
                isTick: false,
              },
              {
                label: "TV series, season 1 release.",
                isTick: false,
              },
              {
                label: "Animated Series marketing campaign.",
                isTick: false,
              },
            ]}
          />
          <RoadmapBox
            label={"YEAR FIVE - Brand Domination and Transmedia Success"}
            className={classes.box5}
            heightofBox={width < 500 ? "18rem" : "20rem"}
            points={[
              {
                label: "Partnerships with major Anime and Gaming events - For live experiences.",
                isTick: false,
              },

              {
                label: "Solidify ZigaMonsters as a dominant brand.",
                isTick: false,
              },

              {
                label: "Organize events, tournaments and conventions for ZigaMonster entertainment platforms.",
                isTick: false,
              },

              {
                label: "Continued innovation and development.",
                isTick: false,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
