import classes from "./EarlyAccess.module.css";
import Cards from "./cards";
import { useRef } from "react";
import { useRouter } from "next/router";

const EarlyAccess = () => {
  const comingSoonRef = useRef(null);
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          {/* <h3>Embark on an epic journey in ZigaMonsters! </h3> */}
          <h3> The Story </h3>
          <p className={classes.desk}>
            {` In a mystical realm, a dark wizard Lord Ziga summoned the ZigaMon, powerful creatures used to conquer the world. Three heroes arose, defeating him, and imprisoning ZigaMon's power in sacred stones. Centuries later, Lord Ziga returns as a gaming CEO, aiming to resurrect the ZigaMon once more!`}
          <br/>
          <br/>
          {`Griffin, Sappir, and Noah, unknowing descendants of the heroes, are drawn into the excitement of Ziga’s exciting game. On a quest to master it, they unveil mysteries blending reality and digital, they confront ancient magic, secrets, and challenges that risk more than they are willing to bet. Can the heroes unveil the truth in time? The fate of the world is at stake. The ZigaMon are awakening!`}
          </p>
          <p className={classes.mob}>
          {` In a mystical realm, a dark wizard Lord Ziga summoned the ZigaMon, powerful creatures used to conquer the world. Three heroes arose, defeating him, and imprisoning ZigaMon's power in sacred stones. Centuries later, Lord Ziga returns as a gaming CEO, aiming to resurrect the ZigaMon once more!`}
          <br/>
          <br/>
          {`Griffin, Sappir, and Noah, unknowing descendants of the heroes, are drawn into the excitement of Ziga’s exciting game. On a quest to master it, they unveil mysteries blending reality and digital, they confront ancient magic, secrets, and challenges that risk more than they are willing to bet. Can the heroes unveil the truth in time? The fate of the world is at stake. The ZigaMon are awakening!`}
          </p>

          <a href="https://story.zigamonsters.com/ ">

          <button
            className={classes.btn}
            >
            READ THE LORE
          </button>
          </a>
          <div className={classes.comingSoon} ref={comingSoonRef}>
            Coming Soon
          </div>
        </div>

        <div className={classes.right}>
          <span>
            Sign up for <br /> early access!
          </span>
          <div>
            <input type='email' placeholder='E-mail' name='' id='' />
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default EarlyAccess;
