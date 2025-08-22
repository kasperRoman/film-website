import React, { FC } from 'react'
import styles from './tv-card.module.scss'
import { ITv } from '../../types/ITv'
import { Category } from '../../types/tmdbTypes'
import apiConfig from '../../api/apiConfig'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

type TVCardProps ={
    item:ITv,
    category:Category
}


const TVCard:FC<TVCardProps>= ({item,category}) => {

const link ='/' + category + '/' + item.id;

const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
        <div className={styles.TVCard} style={{backgroundImage:`url(${bg})`}}>
            <Button className={styles.button}>
                <i className='bx bx-play'></i>
            </Button>
        </div>
        <h3>{item.name}</h3>
    </Link>
  )
}

export default TVCard