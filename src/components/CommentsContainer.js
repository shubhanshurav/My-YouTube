import React from 'react';

const commentData = [
    {
        name:"Shubhanshu Rao",
        text: "Lorem ipsum dolar sit amet.",
        replies: [],
    },
    {
        name:"Ramesh",
        text: "Lorem ipsum dolar sit amet.",
        replies: [
            {
                name:"Priyanshu",
                text: "Lorem ipsum dolar sit amet.",
                replies: [
                    {
                        name:"Ishu",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [],
                    },
                    {
                        name:"Kamlesh",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name:"Rao Shahb",
        text: "Lorem ipsum dolar sit amet.",
        replies: [
            {
                name:"Joe Deon",
                text: "Lorem ipsum dolar sit amet.",
                replies: [
                    {
                        name:"Kohli",
                        text: "Lorem ipsum dolar sit amet.",
                        replies: [
                            {
                                name:"Samson",
                                text: "Lorem ipsum dolar sit amet.",
                                replies: [],
                            },
                            {
                                name:"Mahi",
                                text: "Lorem ipsum dolar sit amet.",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"Rahit Sharma",
        text: "Lorem ipsum dolar sit amet.",
        replies: [
            {
                name:"Somesh Rao",
                text: "Lorem ipsum dolar sit amet.",
                replies: [
                    {
                        name:"Riyansh Rao",
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
        name:"Bumraha",
        text: "Lorem ipsum dolar sit amet.",
        replies: [],
    },
    {
        name:"Kapil Dev",
        text: "Lorem ipsum dolar sit amet.",
        replies: [
            {
                name:"Sachin",
                text: "Lorem ipsum dolar sit amet.",
                replies: [],
            },
            {
                name:"Yuvraj Singh",
                text: "Lorem ipsum dolar sit amet.",
                replies: [
                    {
                        name:"Harbhajan",
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
        <div className='flex shadow-sm bg-zinc-900 p-2 rounded-lg'>
            <img 
            src='/assets/commentuser.jpeg' 
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
            <div className='pl-5 border border-l-zinc-900 ml-5'>
                {/* calling itself -> concept of recursion Recursion */}
               <CommentList comments = {comment.replies} />
            </div>
        </div>
    ));
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <div className='sticky top-0 bg-black'>
            <h1 className='text-xl font-bold '>Comments:</h1>
            <div className='flex items-center py-2'>
            <img src="./assets/user.png" alt="channelLogo" className="w-10 h-10 bg-white rounded-full" />
            <p className='text-sm font-light px-2'>Add a comment...</p>
            </div>
        </div>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer;