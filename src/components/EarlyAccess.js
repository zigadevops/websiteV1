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
          <h3>Embark on an epic journey in ZigaMonsters! </h3>
          <p className={classes.desk}>
            Join Griffyn and his friends in a cutting-edge game developed by{" "}
            <br /> ZigaCorp. Battle with extraordinary creatures, the ZigaMons,
            for
            <br /> an unimaginable prize.
            <br />
            <br />
            But beware, the enigmatic Mr. X has sinister intentions. He plans
            <br /> to exploit energy and break the barrier between our world and
            <br /> the ancient universe of the ZigaMons. Only you can save both{" "}
            <br /> realms.
            <br />
            <br />
            Who will recognize that ZigaMonsters is more than a game? It&rsquo;s
            a
            <br /> quest to safeguard humanity. Answer the call, face the
            challenge,
            <br /> and unleash your inner hero in ZigaMonsters!
            <br /> <br />{" "}
          </p>
          <p className={classes.mob}>
            Join Griffyn and his friends in a cutting-edge game <br /> developed
            by ZigaCorp. Battle with extraordinary
            <br /> creatures, the ZigaMons, for an unimaginable prize.
            <br />
            <br />
            But beware, the enigmatic Mr. X has sinister
            <br /> intentions. He plans to exploit energy and break the <br />
            barrier between our world and the ancient universe <br />
            of the ZigaMons. Only you can save both realms.
            <br />
            <br />
            Who will recognize that ZigaMonsters is more than a<br /> game?
            It&apos;s a quest to safeguard humanity. Answer
            <br /> the call, face the challenge, and unleash your inner
            <br /> hero in ZigaMonsters!
            <br />
          </p>
          <button
            className={classes.btn}
            onClick={() => router.push("https://lore.zigamonsters.com/ ")}>
            READ THE LORE
          </button>
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
