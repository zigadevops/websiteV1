import classes from "./EarlyAccess2.module.css";

const EarlyAccess2 = () => {
  return (
    <div className={classes.container} id='contact'>
      <div>
        <img className={classes.img} src='/Monsters/monster3.png' alt='' />
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
  );
};

export default EarlyAccess2;
