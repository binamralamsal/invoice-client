import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./login.module.sass";
import { use100vh } from "react-div-100vh";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { UserContext } from "../../context/UserContext";
import useDarkMode from "use-dark-mode";

const Login = () => {
  const heightWindow = use100vh();
  useDarkMode(false);

  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (user) navigate("/");
  }, [navigate]);

  const handleLoginUser = async (event) => {
    event.preventDefault();
    setError(null);

    const { error } = (await loginUser(username, password)) || {};
    if (!error) return;

    setError(error);
  };

  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          Invoice&nbsp;App
        </Link>
        <div className={cn("h2", styles.title)}>Login</div>

        <form className={styles.body} action="POST" onSubmit={handleLoginUser}>
          <TextInput
            className={styles.field}
            name="username"
            type="text"
            placeholder="Your username"
            required
            icon="mail"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextInput
            className={styles.field}
            name="password"
            type="password"
            placeholder="Password"
            required
            icon="lock"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className={cn("button", styles.button)}>Login</button>

          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
