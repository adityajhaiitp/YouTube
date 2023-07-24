import React from 'react'


const commentsData=[
    {
      name:"Aditya JHA",
      text:"I am a frontend developer",
      replies:[],
    },
    {
        name:"Aditya JHA",
        text:"I am a frontend developer",
        replies:[  {
            name:"Aditya JHA",
            text:"I am a frontend developer",
            replies:[  {
                name:"Aditya JHA",
                text:"I am a frontend developer",
                replies:[  {
                    name:"Aditya JHA",
                    text:"I am a frontend developer",
                    replies:[  {
                        name:"Aditya JHA",
                        text:"I am a frontend developer",
                        replies:[  {
                            name:"Aditya JHA",
                            text:"I am a frontend developer",
                            replies:[  {
                                name:"Aditya JHA",
                                text:"I am a frontend developer",
                                replies:[  {
                                    name:"Aditya JHA",
                                    text:"I am a frontend developer",
                                    replies:[  {
                                        name:"Aditya JHA",
                                        text:"I am a frontend developer",
                                        replies:[],
                                      },],
                                  },],
                              },],
                          },],
                      },],
                  },],
              },],
          },],
      },

]
const commentsList=({comments})=>
{
    return  comments.map((comment,index)=>
    <div>
          <comment key={index} data={comment}/>);
          <div className="pl-5 border border-l-black ml-5">
          <commentsList comments={comments.replies}/>  
          </div>
    </div>
            
}
const comment=({data}) =>
{
    const {name,text,replies}=data;
    <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
    return <div>comment</div>;
}
const CommentsContainer = () => {
  return (
    <div>
        <h1 className="text 2xl font-bold">comments</h1>
        <comment data={commentsData[0]}/>
        <commentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;