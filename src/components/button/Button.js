import React from 'react'

const Button = ({ButtonFunction,name}) => {
  return (
    <>
    <button onClick={ButtonFunction} className='hover:bg-transparent bg-[#00A59C] text-white font-semibold hover:text-[#00A59C] py-2 px-12 border  hover:border-[#00A59C] rounded'>{name}</button>
    </>
  )
}

export default Button