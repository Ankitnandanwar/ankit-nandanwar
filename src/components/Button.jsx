import React from 'react'

const Button = ({title, ContainerStyles, handleClick}) => {
  return (
    <button onClick={() => handleClick(true)} className={`p-3 fontfam cursor-pointer bg-cyan-800 rounded-sm duration-300 hover:bg-[#32CD32] hover:text-white ${ContainerStyles}`}>{title}</button>
  )
}

export default Button