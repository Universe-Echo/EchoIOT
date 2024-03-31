import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from "@/components/login/SigninForm.module.css";

const SigninForm = () => {
  return (
    <div className={styles.wrapper}>
      <form action="">
        <h1 className={styles.h1}>Login</h1>
        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="Username"
            required
            className={styles.inputBoxInput}
          />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.inputBox}>
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.inputBoxInput}
          />
          <FaLock className={styles.icon} />
        </div>
        <div className={styles.forgot}>
          <a href="" className={styles.forgotBtn}>
            Forgot Password
          </a>
        </div>
        <button type="submit" className={styles.signinBtn}>
          Login
        </button>
        <div className={styles.registerLink}>
          <p>
            Don't have an account?{" "}
            <a href="" className={styles.registerBtn}>
              Create Account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
