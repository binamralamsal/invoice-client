import styles from "./Header.module.sass";
import User from "./User";

const Header = ({ onOpen }) => {
  const handleClick = () => {
    onOpen();
  };

  return (
    <header className={styles.header}>
      <button className={styles.burger} onClick={() => handleClick()}></button>
      <div className={styles.control}>
        <User className={styles.user} />
      </div>
      {/* <div className={styles.btns}>
        <Link className={styles.link} to="/sign-in">
          Sign in
        </Link>
        <Link className={cn("button", styles.button)} to="/sign-up">
          Sign up
        </Link>
      </div> */}
    </header>
  );
};

export default Header;
