import React, { FC, useEffect, useState } from "react";
import styles from './media-grid.module.scss'
import { Category, MOVIE_TYPES, TV_TYPES } from "../../types/tmdbTypes";
import MediaCard from "../media-card/MediaCArd";
import { IMovie } from "../../types/IMovie";
import { ITv } from "../../types/ITv";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import Button from "../button/Button";

type MediaGridProps = {
  category: Category;
};

const MediaGrid: FC<MediaGridProps> = ({ category }) => {
  const [items, setItems] = useState<IMovie[] | ITv[]>([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case "movie":
            response = await tmdbApi.getMoviesList(MOVIE_TYPES.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(TV_TYPES.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [category, keyword]);
  
  const loadmore = async()=>{
         let response = null;
      if (keyword === undefined) {
        const params = {
          page: page +1,
        };
        switch (category) {
          case "movie":
            response = await tmdbApi.getMoviesList(MOVIE_TYPES.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(TV_TYPES.popular, { params });
        }
      } else {
        const params = {
          page: page +1 ,
          query: keyword,
        };
        response = await tmdbApi.search(category, { params });
      }
      setItems([...items, ...response.results]);
      setPage(page +1)
  }

  return (
    <>
    <div className={styles.grid}>
      {items.map((item, i) => (
        <MediaCard item={item} category={category} key={i} />
      ))}
    </div>
    {
      page < totalPage ? (
        <div className={styles.loadmore}>
            <Button variant="outline"  className="small" onClick={loadmore}> Load more</Button>
        </div>
      ):null
    }
    </>
  );
};

export default MediaGrid;
