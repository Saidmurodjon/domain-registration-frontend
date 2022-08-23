import React from 'react'
import Button from '../../components/button/Button'
import Carousel from '../../components/carausel/Carousel'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className="container justify-center m-auto">
        <Navbar/>
    <Carousel/>
    </div>
  )
}

export default Home