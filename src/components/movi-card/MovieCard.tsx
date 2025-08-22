import React, { FC } from 'react'

import styles from "./movie-card.module.scss"
import { IMovie } from '../../types/IMovie'
import { Category } from '../../types/tmdbTypes'
import apiConfig from '../../api/apiConfig'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
type MovieCardProps ={
    item:IMovie,
    category:Category
}


const MovieCard:FC<MovieCardProps> = ({item , category}) => {

const link = '/' + category + '/' + item.id;

const bg =apiConfig.w500Image(item.poster_path || item.backdrop_path)


  return (
    <Link to={link}>
        <div className={styles.movieCard} style={{backgroundImage:`url(${bg})`}}>
            <Button className={styles.button}>
                    <i className='bx bx-play'></i>
            </Button>
        </div>
        <h3>{item.title}</h3>
    </Link>
  )
}

export default MovieCard