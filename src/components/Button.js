import React from 'react';

const Button = ({name}) => {
  return (
    <div>
       <button className='px-4 py-2 m-2 text-[13px] rounded-lg bg-zinc-800'>{name}</button>
    </div>
  )
}

export default Button;