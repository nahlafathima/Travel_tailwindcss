import React from 'react'

const images=[
    'images/gal1.jpg',
    'images/gal2.jpg',
    'images/gal3.png',
    'images/gal4.jpg',
    'images/gal1.jpg',
    'images/gal2.jpg',
    'images/gal4.jpg',
];

const Gallery = () => {
  return (
    <div>
    <div className="relative w-screen bg-cover bg-center h-96" style={{backgroundImage: "url('/images/hero.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h6 className='text-2xl md:text-6xl font-bold text-white mb-4'>Gallery</h6>

      </div>
    </div>
    <div className='py-12 bg-gray-100'>
    <div className='container mx-auto px-4'>
        <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {images.map(image=>(
                <div className='rounded-lg overflow-hidden shadow-md'>
                    <img src={image} alt="" className='h-full w-full object-cover transform transition duration-300 hover:scale-110'/>
                </div>
            ))}
        </div>
    </div>
    </div>
    </div>
  )
}

export default Gallery
