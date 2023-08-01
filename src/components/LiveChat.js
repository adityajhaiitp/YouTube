import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage } from "../utils/helper";

const LiveChat=()=>
{
    const[liveMessage,setLiveMessage]=("");
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages)
    useEffect(()=>{
         const i=   setInterval(()=>{
               dispatch(addMessage(
                {
                name:generaterandomName(),
                message:generateRandomMessage(10),
                }
               ));
            },2000);
            return ()=>clearInterval(i);
    } ,[])
    return (
        <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    <div>
{
        chatMessages.map((c,i)=>(
        <ChatMessage name={c.name} message={c.message}/>
        ))
        }
        </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black onSubmit={(e)=>{
             e.preventDefault();
             dispatch(addMessage({
                name:"Aditya Jha",
                message:liveMessage,
             }));
             setLiveMessage("");
        }}">
            <input className="px-2 w-96" type="text" value={liveMessage} onChange={(e)=>{
                setLiveMessage(e.target.value);
            }}>
                <button className="px-2 mx-2 bg-green">Send</button>

            </input>
        </form>
        </>
};
export default LiveChat;