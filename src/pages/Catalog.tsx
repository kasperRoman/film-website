import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CatalogHeader from '../components/catalog-header/CatalogHeader';
import {Category, CATEGORY} from '../types/tmdbTypes'
import MovieGrid from '../components/movie-grid/MovieGrid';


const Catalog = () => {
  const {category} = useParams<{ category?:Category}>();
  const navigate =useNavigate();


    useEffect(() => {
    if (!category || (category !== CATEGORY.movie && category !== CATEGORY.tv)) {
      navigate('/error', { replace: true }); 
    }
  }, [category, navigate]);

  if (!category || (category !== CATEGORY.movie && category !== CATEGORY.tv)) {
    return null;
  }
 


  
  return (
    <>
      <CatalogHeader category={category}/>
      <div className='container'>
        <div className='section mb-3'>
          
        </div>
      </div>
    
    </>
  )
}

export default Catalog