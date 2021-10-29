import React, { useState, useEffect } from "react";
import Button from "./layout/Button";
import styles from "../styles/main.module.scss";
import List from "./layout/List";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

import { fetchNews, addTrend, deleteTrend } from "../thunks";

const Main = () => {
  const [value, setValue] = useState("");
  const [adding, setAdding] = useState(false);

  const news = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const trends = useSelector((store) => store.trends);

  useEffect(() => {
    localStorage.setItem("trends", JSON.stringify(trends));
  }, [trends]);

  return (
    <div className={`col centered container ${styles.main}`}>
      <section className="row centered sp-btw">
        {trends.map((trend) => (
          <Button text={trend} onClick={() => dispatch(fetchNews(trend))} />
        ))}
        <section className={`row centered sp-btw`}>
          <Button text="+" onClick={() => setAdding(!adding)} />
          {adding && (
            <>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                text="confirm"
                onClick={() => dispatch(addTrend(value))}
              />
            </>
          )}
        </section>
      </section>
      {news && (
        <List>
          {news.map((news) => (
            <Card news={news} />
          ))}
        </List>
      )}
    </div>
  );
};

export default Main;
