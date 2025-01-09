import React from 'react'
import PopularDestination from '../components/PopularDestination'
import Services from '../components/Services'
import Clients from '../components/Clients'


const Home = () => {
  return (
    <>
    <div className="relative w-screen h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/hero.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Explore the world with us</h1>
        <p className='text-lg md:text-2xl text-white mb-8'>Discover amazing places at exclusive deals</p>
        <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105'>Get started</button>
      </div>
    </div>
    <PopularDestination/>
    <Services/>
    <Clients/>
    </>
  )
}

export default Home
