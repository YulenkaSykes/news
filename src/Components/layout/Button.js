import React from "react";
import styles from "../../styles/layout/button.module.scss";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick()} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
