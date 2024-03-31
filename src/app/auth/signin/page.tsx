import React from "react";
import styles from "@/app/auth/signin/page.module.css";
import SigninForm from "@/components/login/SigninForm";

const signin = () => {
  return (
    <main className="main">
      <div className={styles.signBody}>
        <SigninForm />
      </div>
    </main>
  );
};

export default signin;
