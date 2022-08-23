import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className="container justify-center m-auto">
        <Navbar/>
        <h2>Home</h2>
        <Button name={"Buyurtma berish"}/>
    </div>
  )
}

export default Home