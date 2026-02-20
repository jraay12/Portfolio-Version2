import React from 'react'

import { technologies } from '../../techs'

const TechStack = () => {
  return (
    <div className='min-h-20 flex  text-white bg-white items-center overflow-hidden'>
      <div className='flex justify-evenly w-full animate-scroll-animate gap-30'>
        {technologies?.map((item) => (
          <img src={item.icon} className='w-10 h-10'/>
        ))}
      </div>
    </div>
  )
}

export default TechStack
