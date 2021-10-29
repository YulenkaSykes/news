import React, { useEffect } from "react";
import styles from "../../styles/layout/header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cleanNews } from "../../thunks";

import { changeTab } from "../../thunks";

const Header = () => {
  const tab = useSelector((store) => store.tab);
  const tabs = ["news", "main"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanNews());
  }, [tab]);
  return (
    <div className={`row centered shadow ${styles.header}`}>
      <div className={`row centered sp-btw ${styles.container}`}>
        <h1>News</h1>
        <section className="row centered">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={styles.link}
              onClick={() => dispatch(changeTab(tab))}
            >
              {tab}
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Header;
