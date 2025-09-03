import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Category } from "../../types/tmdbTypes";
import tmdbApi from "../../api/tmdbApi";

import styles from "./detail.module.scss";
import apiConfig from "../../api/apiConfig";
import { IDetailMovie } from "../../types/IDetailMovie";
import { IDetailTV } from "../../types/IDetailTv";
import clsx from "clsx";

const Details = () => {
  const { category, id } = useParams<{ category: Category; id: string }>();

  const [item, setItem] = useState<IDetailMovie | IDetailTV | null>(null);

  useEffect(() => {
    const getDetail = async () => {
      if (!category || !id) return;
      const response = await tmdbApi.details(category, id, { params: {} });
      setItem(response);
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(response);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className={styles.banner}
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.poster_path || item.backdrop_path
              )})`,
            }}
          ></div>
          <div className={clsx(styles.content, "mb-3", "container")}>
            <div className={styles.poster}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
              </div>
              <div className={styles.info}>
                <h2 className={styles.title}>
                  {category === "movie"
                    ? (item as IDetailMovie).title
                    : (item as IDetailTV).name}
                </h2>
                <div className={styles.genres}>
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className={styles.genre}>
                        {genre.name}
                      </span>
                    ))}
                </div>
                <p className={styles.overview}>{item.overview}</p>
                <div className={styles.cast}>
                  <div className="section__header">
                    <h2>Cast</h2>
                  </div>
                </div>
              </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
