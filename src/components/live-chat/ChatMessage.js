import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img src='./assets/commentuser.jpeg' alt='user-logo' 
            className='rounded-full h-8 w-8'
        />
        <span className='font-bold px-4 text-[12px] text-gray-700'>{name}</span>
        <span className='text-gray-700 text-[13px]'>{message}</span>
    </div>
  )
}

export default ChatMessage;