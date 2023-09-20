import React from 'react'

const Hero = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px]
         bg-black/40  flex flex-col justify-center'>
        <h1 className=' px-4  text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
            <h1 className=' px-4  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'> Foods </span> Delivered</h1>
        </div>
        <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
    </div>
  )
}

export default Hero
