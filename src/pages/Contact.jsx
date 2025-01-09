import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-100'>
    <div className="relative w-screen bg-cover bg-center h-96" style={{backgroundImage: "url('/images/hero.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h6 className='text-2xl md:text-6xl font-bold text-white mb-4'>Contact</h6>

      </div>
    </div>
    <div className='container mx-auto py-12'>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
            <div className='bg-white rounded-lg shadow-md p-6 text-black'>
                <h3 className='text-xl bold mb-4 font-bold' >Contact details</h3>
                <div className='flex items-center mb-4'>
                    <FaEnvelope className='text-blue-500 mr-2'/>
                    <p>info@travelagency.com</p>
                </div>
                <div className='flex items-center mb-4'>
                    <FaPhone className='text-blue-500 mr-2'/>
                    <p>+123456789</p>
                </div>
                <div className='flex items-center mb-4'>
                    <FaMapMarkedAlt className='text-blue-500 mr-2'/>
                    <p>Kochi</p>
                </div>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-bold mb-4 text-black' >Get in Touch</h3>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Name</label>
                         <input type='text' className='w-full p-2 bg-white text-black border border-gray-300 rounded' placeholder='Enter name'/>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Email</label>
                        <input type='email' className='w-full p-2 bg-white text-black border border-gray-300 rounded' placeholder='Enter email'/>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Message</label>
                        <textarea name='' className='w-full p-2 bg-white text-black border border-gray-300 rounded' placeholder='write meassages' id=""></textarea>
                    </div>
                    <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded'>Send message</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
