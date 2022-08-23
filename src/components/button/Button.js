import React from 'react'

const Button = ({ButtonFunction,name}) => {
  return (
    <>
    <button onClick={ButtonFunction} className='hover:bg-transparent bg-sky-700 text-white font-semibold hover:text-sky-700 py-2 px-12 border  hover:border-sky-700 rounded'>{name}</button>
    </>
  )
}

export default Button