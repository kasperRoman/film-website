import React, { FC } from 'react'
import styles from './catalog-header.module.scss'
import bg from '../../assets/images/footer-bg.jpg'
import { Category } from '../../types/tmdbTypes'


type CatalogHeaderProps ={
    category:Category
}
const CATEGORY_TITLES: Record<Category, string> = {
  movie: 'Movies',
  tv: 'TV Series',
};

const CatalogHeader:FC<CatalogHeaderProps> = ({category}) => {
const title = CATEGORY_TITLES[category] ?? 'Unknown';

  return (
    <div className={styles.header} style={{backgroundImage:`url(${bg})`}}>
              <h2 className={styles.title}>{title}</h2>
    </div>
  )
}

export default CatalogHeader