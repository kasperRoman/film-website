import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'

const CustomErrorLayout = () => {
  return (
   <section className='container'>
      <h1>404 — Сторінку не знайдено</h1>
      <p>Можливо, ви ввели неправильну адресу або сторінка була видалена.</p>
      <Link to="/"><Button>Повернутись на головну</Button></Link>
    </section>
  )
}

export default CustomErrorLayout 