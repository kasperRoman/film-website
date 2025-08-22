import React, { FC, useEffect, useState } from 'react'
import { Category, MovieType } from '../../types/tmdbTypes'
import tmdbApi from '../../api/tmdbApi'
import { IMovie } from '../../types/IMovie'
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from '../../api/apiConfig';
import styles from './movie-list.module.scss'

type MovieListProps ={
    category:Category,
    type:MovieType,
}

const MovieList:FC<MovieListProps> = ({category,type}) => {

    const [items,setItems] = useState<IMovie[]>([]);

    useEffect(()=>{
    const getList = async () =>{
     let response = null;
     const params={};
      response = await tmdbApi.getMoviesList(type, {params})
      setItems(response.results)
      console.log(response.results)

    }
     getList()
    },[])


  return (
            <div className={styles.movieList}>
                {items.length > 0 && (
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
                loop= {true} 
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i} className={styles.swiperSlide}>
                            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
                )}
        </div>
  )
}

export default MovieList