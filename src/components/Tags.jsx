import React from 'react'

const Tags = ({items}) => {
  return (
    <button className='py-2 m-3 text-sm px-4 border border-stone-700 w-auto rounded-full'>
      {items.name}
    </button>
  )
}

export default Tags