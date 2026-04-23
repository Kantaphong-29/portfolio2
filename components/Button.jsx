import React from 'react'

const Button = (props) => {
  return (
    <>
        <a href="" className='px-8 py-4 bg-blue-950 text-white font-semibold rounded-full hover:bg-white-700 transition'>
            {props.nameButton}
        </a>
    </>
  )
}

export default Button