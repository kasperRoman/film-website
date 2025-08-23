import React, { FC } from 'react';
import styles from './media-card.module.scss'; // об'єднаний стиль
import { IMovie } from '../../types/IMovie';
import { ITv } from '../../types/ITv';
import { Category } from '../../types/tmdbTypes';
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

type MediaCardProps = {
  item: IMovie | ITv;
  category: Category;
};

const MediaCard: FC<MediaCardProps> = ({ item, category }) => {
  const link = `/${category}/${item.id}`;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  const title = 'title' in item ? item.title : item.name;

  return (
    <Link to={link}>
      <div className={styles.card} style={{ backgroundImage: `url(${bg})` }}>
        <Button className={styles.button}>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};

export default MediaCard;