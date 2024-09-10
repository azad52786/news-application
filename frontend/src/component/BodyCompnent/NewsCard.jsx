import React from 'react'
import newsImg from '../../assets/news.png'

const NewsCard = ({data , index = 0}) => {
    // console.log(data)
    const { title , image , url , description } = data;
  return (
    // index is a bad practice but here i don't have anything to use as an index
    <div className=' w-full h-full flex flex-col gap-y-3 p-2 rounded-lg hover:bg-richblack-700 bg-opacity-5
         transition-all duration-300 hover:shadow-lg
    ' key={index}>
        <img src={!image ? newsImg : image } alt="thumbnail" className=' rounded-md  h-[240px] object-cover' loading='lazy'/>
        <h1 className=' font-mono font-semibold text-lg md:text-xl '>{title.slice(0 , 50)}</h1>
        <p className=' text-[16px] font-inter text-pure-greys-50'>{description.slice(0 , 100) + ' '}
            <span className=' text-yellow-25 text-sm'><a href={url} target='_blank' className=' cursor-pointer'>Read More...</a></span>
        </p>
    </div>
  )
}

export default NewsCard
