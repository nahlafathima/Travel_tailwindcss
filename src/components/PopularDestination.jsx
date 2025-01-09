import React from 'react'

const destination = [
    {
        image:'/images/gal1.jpg',
        title: 'Paris, France',
        description: 'The romantic capital of France, known for the Eiffel Tower, art, and exquisite cuisine.'
    },
    {
        image:'/images/gal2.jpg',
        title: 'Rome, Italy',
        description: ' A historic city rich in ancient ruins, like the Colosseum, and vibrant Italian culture.'
    },
    {
        image:'/images/gal3.png',
        title: 'Bali, Indonesia',
        description: 'A tropical paradise famous for its stunning beaches, temples, and lush landscapes.'
    },
    {
        image:'/images/gal4.jpg',
        title: 'Sydney, Australia',
        description: 'A bustling harbor city with iconic landmarks like the Sydney Opera House and Bondi Beach.'
    },
]

const PopularDestination = () => {
  return (
    <div className='py-12 bg-gray-100 '>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8 text-black'>Popular Destination</h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {destination.map((city,index)=>(
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                    <img src={city.image} alt={city.title} className='w-full h-48 object-cover transform transition duration-300 hover:scale-110'/>
                    <div className='p-4'>
                        <h3 className='text-xl font-bold mb-2 text-black'>{city.title}</h3>
                        <p className='text-gray-600'>{city.description}</p>
                    </div>

                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default PopularDestination
