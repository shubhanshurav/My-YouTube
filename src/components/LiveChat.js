import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomSentence } from '../utils/helper';

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  
  useEffect(() => {
     const i = setInterval(() => {
        //API Polling

        dispatch(
            addMessage({
                name: generateRandomName(),
                message: makeRandomSentence(7) + "✌️",
            })
        );
     },1500)

     return () => clearInterval(i);
  },[])

  return (
    <>
    <div className='w-full h-[500px] p-2 ml-2 border border-white bg-slate-300 rounded-t-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {    // Discliamer: Don't use index as Keys
            chatMessages.map((c,i) => ( 
                <ChatMessage key={i} name={c.name} message={c.message} />
            ))
        }
        </div>
    </div>

    <form 
     className='w-full p-2 ml-2 border border-white' 
     onSubmit={(e) => {
        e.preventDefault();
        dispatch(
            addMessage({
                name:"Shubhanshu Rao",
                message: liveMessage,
            })
        );

        setLiveMessage("");
     }}
    >
      <input 
        className='px-2 w-[80%] text-semibold text-gray-700' 
        type="text" 
        value={liveMessage} 
        onChange = {(e) => {
            setLiveMessage(e.target.value);
        }}
      />
      <button className='px-2 mx-2 bg-red-600'>Send</button>
    </form>
    </>
  );
};

export default LiveChat;