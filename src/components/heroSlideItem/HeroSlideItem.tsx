import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';
import styles from '../hero-slide/hero-slide.module.scss';

type Props = {
  item: {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
  };
  isActive: boolean;
  onWatchTrailer: () => void;
};

const HeroSlideItem: React.FC<Props> = ({ item, isActive, onWatchTrailer }) => {
  const navigate = useNavigate();
  const background = apiConfig.originalImage(item.backdrop_path || item.poster_path);

  return (
    <div
      className={`${styles.heroSlideItem} ${isActive ? styles.active : ''}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={`${styles.content} container`}>
        <div className={styles.info}>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.overview}>{item.overview}</div>
          <div className={styles.btns}>
            <Button onClick={() => navigate(`/movie/${item.id}`)}>Watch now</Button>
            <Button variant='outline' onClick={onWatchTrailer}>Watch trailer</Button>
          </div>
        </div>
        <div className={styles.poster}>
          <img src={apiConfig.w500Image(item.poster_path)} alt={item.title} />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;