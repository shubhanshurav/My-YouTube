import React from 'react';

const commentData = [
    {
        name:"Shubhanshu Rao",
        text: "Lorem ipsum dolar sit amet.",
        replies: [],
    },
    {
        name:"Shubhanshu Rao",
        text: "Lorem ipsum dolar sit amet.",
        replies: [
            {
                name:"Shubhanshu Rao",
                text: "Lorem ipsum dolar sit amet.",
                replies: [
                    {
                        name:"Shubhanshu Rao",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [],
                    },
                    {
                        name:"Shubhanshu Rao",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [
                            {
                                name:"Shubhanshu Rao",
                                text: "Lorem ipsum dolar sit amet.",
                                replies: [
                                    {
                                        name:"Shubhanshu Rao",
                                        text: "Lorem ipsum dolar sit amet.",
                                        replies: [
                                            {
                                                name:"Shubhanshu Rao",
                                                text: "Lorem ipsum dolar sit amet.",
                                                replies: [],
                                            },
                                            {
                                                name:"Shubhanshu Rao",
                                                text: "Lorem ipsum dolar sit amet.",
                                                replies: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"Shubhanshu Rao",
        text: "Lorem ipsum dolar sit amet.",
        replies: [],
    },
    {
        name:"Shubhanshu Rao",
        text: "Lorem ipsum dolar sit amet.",
        replies: [
            {
                name:"Shubhanshu Rao",
                text: "Lorem ipsum dolar sit amet.",
                replies: [
                    {
                        name:"Shubhanshu Rao",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [],
                    },
                    {
                        name:"Shubhanshu Rao",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name:"Shubhanshu Rao",
        text: "Lorem ipsum dolar sit amet.",
        replies: [],
    },
    {
        name:"Shubhanshu Rao",
        text: "Lorem ipsum dolar sit amet.",
        replies: [
            {
                name:"Shubhanshu Rao",
                text: "Lorem ipsum dolar sit amet.",
                replies: [],
            },
            {
                name:"Shubhanshu Rao",
                text: "Lorem ipsum dolar sit amet.",
                replies: [
                    {
                        name:"Shubhanshu Rao",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [],
                    },
                ],
            },
        ],
    },
];

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return ( 
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
            <img 
            src='/assets/user.png' 
            alt='commentlogo' 
            className='w-10 h-10'
            />

            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentList = ({comments}) => {
    // Disclaimer: Don't use indexes as keys
    // return comments.map((comment, index) => <Comment key={index}  data={comment} />);

    return comments.map((comment,index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
               <CommentList comments = {comment.replies} />
            </div>
        </div>
    ));
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer;