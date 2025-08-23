import React, { FC, useEffect, useState } from 'react';
import { Category, MovieType, TvType } from '../../types/tmdbTypes';
import tmdbApi from '../../api/tmdbApi';
import { IMovie } from '../../types/IMovie';
import { ITv } from '../../types/ITv';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './media-list.module.scss';
import MediaCard from '../media-card/MediaCArd';

type MediaListProps = {
  category: Category;
  type: MovieType | TvType;
};

const MediaList: FC<MediaListProps> = ({ category, type }) => {
  const [items, setItems] = useState<(IMovie | ITv)[]>([]);

  useEffect(() => {
    const getList = async () => {
      const params = {};
      let response = null;

      if (category === 'movie') {
        response = await tmdbApi.getMoviesList(type as MovieType, { params });
      } else {
        response = await tmdbApi.getTvList(type as TvType, { params });
      }

      setItems(response.results);
    };

    getList();
  }, [category, type]);

  return (
    <div className={styles.mediaList}>
      {items.length > 0 && (
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={'auto'}
          loop={true}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <MediaCard item={item} category={category}/>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MediaList;