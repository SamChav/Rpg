import { useState } from "react";
import styles from "../styles/LoginModal.module.css";
const LoginModal = ({ showModal, setShowModal, onClose }) => {
  return (
    <>
      {showModal ? (

          <div className={styles.modalWrapper}>
            <div className={styles.modalDiv}>
              Incorrect user name or password.              
            </div>
            <button className={styles.button} onClick={onClose}>Try Again</button>
          </div>

      ) : null}
    </>
  );
};

export default LoginModal;
