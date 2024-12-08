import React from 'react'

const Button = ({title, ContainerStyles, handleClick}) => {
  return (
    <button onClick={() => handleClick(true)} className={`p-3 fontfam cursor-pointer text-black bg-[#abdf3a] font-semibold rounded-sm duration-300 ${ContainerStyles}`}>{title}</button>
  )
}

export default Button