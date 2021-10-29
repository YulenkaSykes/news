import React, { useState } from "react";
import styles from "../styles/news.module.scss";
import Button from "./layout/Button";
import { useSelector, useDispatch } from "react-redux";

import { fetchNews } from "../thunks";

import List from "./layout/List";
import Card from "./Card";

const News = () => {
  const news = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const [value, setVvalue] = useState("");
  return (
    <div className={`col centered container ${styles.news}`}>
      <h1>Getting any news by request</h1>
      <section className="row centered">
        <input
          type="text"
          value={value}
          onChange={(e) => setVvalue(e.target.value)}
        />
        <Button text="search" onClick={() => dispatch(fetchNews(value))} />
      </section>
      {news && (
        <List news={news}>
          {news.map((n) => (
            <Card news={n} />
          ))}
        </List>
      )}
    </div>
  );
};

export default News;
