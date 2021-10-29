import React, { useState } from "react";
import styles from "../styles/card.module.scss";
import Button from "./layout/Button";
import { useDispatch } from "react-redux";
import { deleteNews } from "../thunks";

const Card = ({ news }) => {
  const [full, setFull] = useState(false);
  const dispatch = useDispatch();
  const {
    author,
    link,
    media,
    published_date,
    rank,
    rights,
    title,
    summary,
    topic,
    _id,
  } = news;

  const date = new Date(Date.parse(published_date));

  if (full)
    return (
      <div className={`col ${styles.cardFull}`}>
        <h3>{title}</h3>
        <section className={`row centered ${styles.section}`}>
          <div
            style={{ background: `url(${media})` }}
            className={styles.img}
          ></div>
          <p>{summary}</p>
        </section>
        <a href={link}>View original</a>
        <Button
          text="Hide"
          onClick={() => {
            setFull(false);
          }}
        />
      </div>
    );
  else
    return (
      <div className={`row centered sp-btw ${styles.cardSmall}`}>
        <section className={`row ${styles.section}`}>
          <div
            style={{ background: `url(${media})` }}
            className={styles.img}
          ></div>
          <p>{title.slice(0, 20)}...</p>
        </section>
        <Button
          text="Viev"
          onClick={() => {
            setFull(true);
          }}
        />
        <Button text="Not like" onClick={() => dispatch(deleteNews(news))} />
        <span>
          {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
        </span>
      </div>
    );
};

export default Card;
