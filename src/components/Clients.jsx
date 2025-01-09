import React from 'react'

const Testimonials = [
    {
        name:'John Doe',
        image:'/images/me2.png',
        text: 'Booking my vacation through this service was a breeze! The flight and hotel reservations were seamless, and their customer support was outstanding. Highly recommend!.',
        location: 'Newyork, USA'
    },
    {
        name:'Jane Smith',
        image:'/images/me.png',
        text: 'I loved their beach getaway packages. The recommendations were spot on, and I had the most relaxing vacation ever.',
        location: 'Newyork, USA'
    },
    {
        name:'John Doe',
        image:'/images/me2.png',
        text: 'Their concierge services were a game-changer. From restaurant reservations to local tours, everything was handled with care and precision. Truly exceptional!',
        location: 'Newyork, USA'
    },
    
]

const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8 text-black'>What our client say</h3>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {Testimonials.map((testimonial,index)=>(
                <div key={index} className='bg-white rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <img src={testimonial.image} alt={testimonial.title} className='w-28 h-28 p-6 rounded-full mx-auto mb-4'/>
                    
                        <h3 className='text-xl font-bold mb-2 text-black'>{testimonial.name}</h3>
                        <p className='text-gray-600 '>{testimonial.location}</p>
                        <p className='text-gray-600 italic mb-5 mx-5'>{testimonial.text}</p>
                   

                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Clients
