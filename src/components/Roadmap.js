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
            label={"PHASE ONE"}
            className={classes.box1}
            points={[
              { label: "ZigaMonsters website goes live", isTick: true },
              { label: "NFT Drop 1", isTick: false },
              {
                label: "M-Games app launch with ZigaRun mini-game",
                isTick: false,
              },
            ]}
          />
          <RoadmapBox
            label={"PHASE TWO"}
            className={classes.box2}
            points={[
              {
                label: "NFT Drop 2 (OpenSea embedded within website)",
                isTick: false,
              },
              { label: "ZigaRace mini-game launch", isTick: false },
            ]}
          />
          <RoadmapBox
            label={"PHASE THREE"}
            className={classes.box3}
            points={[
              {
                label: "Marketplace launch",
                isTick: false,
              },
              {
                label: "NFT Drop 3 (on Zigamonsters Marketplace)",
                isTick: false,
              },
              {
                label: "ZigaRam mini-game launch",
                isTick: false,
              },
            ]}
          />
          <RoadmapBox
            label={"PHASE FOUR"}
            className={classes.box4}
            points={[
              {
                label: "ZigaRaid Mini-game launch",
                isTick: false,
              },
              {
                label: "ZigaMonsters Merch store goes online",
                isTick: false,
              },
              {
                label: "Epic ZigaMonsters Game V1 launch, battle, play, earn",
                isTick: false,
              },
            ]}
          />
          <RoadmapBox
            label={"FURTHER AHEAD"}
            className={classes.box5}
            heightofBox={width < 500 ? "18rem" : "20rem"}
            points={[
              {
                label: "Card Game",
                isTick: false,
              },

              {
                label: "Online Comics",
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
