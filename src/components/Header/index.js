import styles from "./Header.module.sass";
import User from "./User";

const Header = ({ onOpen }) => {
  const handleClick = () => {
    onOpen();
  };

  let fullName = JSON.parse(localStorage.getItem("userInfo")).name;

  return (
    <header className={styles.header}>
      <button className={styles.burger} onClick={() => handleClick()}></button>
      <div className={styles.control}>
        <span className={styles.user}>Hello {fullName} ✋</span>
        <User />
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
