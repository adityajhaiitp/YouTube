const ChatMessage=({name,message})=>{
 return (
 <div display="flex items-center shadow-sm">ChatMessage;
   <img className="h-8" 
   alt="user" 
   src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png">
   </img>
   <span className="font-bold px-2">name</span>
   <span>message</span>
   </div>
 );
};
export default ChatMessage;