import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.loginSheet}>
          <form className={styles.form}>
            <p className={styles.nameAndPass}>
              Username:
              <br />
              <input placeholder="Username"></input>
              <br />
              Password:
              <br />
              <input placeholder="Password"></input>
            </p>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                Login
              </button>
              <Link href="/CreateCharacter">
              <button type="button" className={styles.button}>
                Register
              </button>
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
