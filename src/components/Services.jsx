import React from 'react'
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa'

const services = [
    {
        icon: <FaPlane className='text-4xl text-blue-500'/>,
        title: 'Flight booking',
        description: 'We provide easy and fast flight booking'
    },
    {
        icon: <FaHotel className='text-4xl text-blue-500'/>,
        title: 'Hotel Reservations',
        description: 'Find the best deals on hotels and accommodations'
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-blue-500'/>,
        title: 'Beach Getaways',
        description: 'Enjoy relaxing and adventurous beach vacations'
    },
    {
        icon: <FaConciergeBell className='text-4xl text-blue-500'/>,
        title: 'Concierge Services',
        description: 'We offer personalized services to enhance your travel experience'
    },
    
]
const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8 text-black'>Our Services</h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {services.map((service,index)=>(
                <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <div className='mb-4'>{service.icon}</div>
                        <h3 className='text-xl font-bold mb-2 text-black'>{service.title}</h3>
                        <p className='text-gray-600'>{service.description}</p>

                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Services
