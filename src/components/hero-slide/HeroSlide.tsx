import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Modal from "../modal/Modal";
import ModalContent from "../modal/ModalContent";

import tmdbApi from "../../api/tmdbApi";

import { CATEGORY, MOVIE_TYPES } from "../../types/tmdbTypes";
import { IMovie } from "../../types/IMovie";

import styles from "./hero-slide.module.scss";
import HeroSlideItem from "../heroSlideItem/HeroSlideItem";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState<IMovie[]>([]);
  const [activeTrailerId, setActiveTrailerId] = useState<number | null>(null);
  const [trailerSrc, setTrailerSrc] = useState<string>("");

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(MOVIE_TYPES.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 9));
        console.log(response);
      } catch {
        console.log("error");
      }
    };

    getMovies();
  }, []);

  const openTrailer = async (movieId: number) => {
    try {
      const getVideo = await tmdbApi.getVideos(CATEGORY.movie, movieId);
      if (getVideo.results.length > 0) {
        const videoKey = getVideo.results[0].key;
        setTrailerSrc(`https://www.youtube.com/embed/${videoKey}`);
      } else {
        setTrailerSrc("");
      }
      setActiveTrailerId(movieId);
    } catch (err) {
      console.error("Помилка при завантаженні трейлера", err);
    }
  };

  const closeTrailer = () => {
    setTrailerSrc("");
    setActiveTrailerId(null);
  };

  return (
    <div className={styles.heroSlide}>
      <Swiper
        modules={[Autoplay]}
        // autoplay={{ delay: 3000 }}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop= {true} 
      >
        {movieItems.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                isActive={isActive}
                onWatchTrailer={() => openTrailer(item.id)}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {activeTrailerId !== null && (
        <Modal active={true} id={`modal_${activeTrailerId}`}>
          <ModalContent onClose={closeTrailer}>
            {trailerSrc ? (
              <iframe
                width="100%"
                height="500px"
                title="trailer"
                src={trailerSrc}
                allowFullScreen
              />
            ) : (
              <div>No trailer available</div>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default HeroSlide;
