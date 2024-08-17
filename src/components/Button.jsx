import React from 'react'

const Button = ({title, ContainerStyles, handleClick}) => {
  return (
    <button onClick={() => handleClick(true)} className={`p-3 bg-blue-950 rounded-md hover:bg-black hover:text-white ${ContainerStyles}`}>{title}</button>
  )
}

export default Button