import React, { FC, useEffect, useState } from "react";
import { Category, TvType } from "../../types/tmdbTypes";
import styles from "./tv-list.module.scss";
import tmdbApi from "../../api/tmdbApi";
import { ITv } from "../../types/ITv";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";

type TvListProps = {
  category: Category;
  type: TvType;
};

const TVList: FC<TvListProps> = ({ category, type }) => {
  const [items, setItems] = useState<ITv[]>([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      response = await tmdbApi.getTvList(type, { params });
      setItems(response.results);
      console.log(response);
    };
    getList();
  }, []);

  return (
    <div className={styles.tvList}>
        {items.length > 0 && (
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        loop={true}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
        )}
    </div>
  );
};

export default TVList;