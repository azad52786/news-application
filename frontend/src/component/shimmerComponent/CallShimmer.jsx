import React from 'react'
import Shimmer from './ShimmerCard'

const CallShimmer = () => {
  return (
    <div className=' mt-6  flex flex-row  flex-wrap gap-y-4 w-full h-full justify-around '>
      {
        Array.from({ length: 11 }, (_, i) => (
            <Shimmer key={i} />
          ))
      }
    </div>
  )
}

export default CallShimmer
