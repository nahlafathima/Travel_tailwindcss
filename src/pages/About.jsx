
import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const About = () => {
  return (
    <div className='bg-gray-100'>
    <div className="relative w-screen bg-cover bg-center h-96" style={{backgroundImage: "url('/images/hero.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h6 className='text-2xl md:text-6xl font-bold text-white mb-4'>About</h6>

      </div>
    </div>
    <div className='container mx-6 px-2 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-center justify-center '>
                <img src='images/hero.png' alt='' className='rounded-lg shadow-md w-full h-auto'/>
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-2xl font-bold mb-4 text-black'>Who we are</h3>
                <p className='text-gray-700 mb-4'>We are a dedicated travel agency with a passion for creating unforgettable experiences. With a team of travel experts, we specialize in tailoring journeys that inspire, excite, and rejuvenate.</p>
                <h3 className='text-2xl font-bold mb-4 text-black'>Our mission</h3>
                <p className='text-gray-700 mb-4'>Our mission is to make travel seamless, accessible, and enriching. We strive to connect people with their dream destinations, offering exceptional service and unforgettable memories.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
