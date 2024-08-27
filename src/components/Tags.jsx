import React from 'react'

const Tags = ({items}) => {
  return (
    <button className='py-2 m-3 text-sm px-4 border border-stone-700 w-auto rounded-full hover:bg-green-600 hover:text-white'>
      {items.name}
    </button>
  )
}

export default Tags