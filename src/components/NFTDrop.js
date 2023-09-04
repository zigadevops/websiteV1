import classes from "./NFTDrop.module.css";

const NFTDrop = () => {
  return (
    <div className={classes.container} id='dragon'>
      <div>
        <img className={classes.img} src='/Monsters/monster2.png' alt='' />
      </div>
      <div className={classes.comingSoon}>
        <div className={classes.comingSoonInnerBox}>
        <h2>
          ZigaMonsters <br /> NFT Drop #1
        </h2>
        <p>More information will come soon...</p>
          {/* <p>Coming Soon</p>
          <div>
            {" "}
            <p>TIME LEFT UNTIL NFT DROP</p>
            <span>STARTING SOON</span>
          </div> */}
          <button className={classes.btn}>COMING SOON</button>
        </div>
      </div>
    </div>
  );
};

export default NFTDrop;
