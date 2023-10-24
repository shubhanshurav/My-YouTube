import React from 'react';

const Button = ({name}) => {
  return (
    <div>
       <button className='px-5 py-2 m-2 text-sm rounded-lg bg-zinc-800'>{name}</button>
    </div>
  )
}

export default Button;