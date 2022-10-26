import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import LoginModal from "./loginModal";
const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const route = useRouter();
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const login = (e) => {
    e.preventDefault();    
    const user = e.target[0].value
    const password = e.target[1].value
    axios.get("/api/login")
    .then((res) => {
      res.data.find(el => {
        console.log(el)
        if (user.toLowerCase() === el.username.toLowerCase() && password === el.password) {
          console.log(el.username)
          console.log(el.password)
          route.push("/CreateCharacter")
        } else {
          setShowModal((prev) => true)
        }
      })
    })
  }
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        
        {showModal === false ?
         <div className={styles.loginSheet}>
         <form className={styles.form} onSubmit={login}>
            <p className={styles.nameAndPass}>
              Username:
              <br />
              <input placeholder="Username"></input>
              <br />
              Password:
              <br />
              <input placeholder="Password" type="password"></input>
            </p>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                Login
              </button>
              </div>
              </form>
             <div className={styles.register}>
             <button type="button" className={styles.button}>
             Register
             </button>
             </div>
             </div> : <LoginModal showModal={showModal} setShowModal={setShowModal} onClose={() => {
              setShowModal((prev) => !prev)
             }}></LoginModal>}

        
      </div>
    </div>
  );
};

export default Login;
