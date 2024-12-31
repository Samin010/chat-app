import useGetMessages from "../../../hooks/useGetMessages";
import useListenMessages from "../../../hooks/useListenMessages";
import MessageSkeleton from "../../skeltons/MessageSkelton";
import Message from "./Message";

const Messages = () => {
	const {loading,messages}=useGetMessages()
	useListenMessages()
	// console.log('Messages are :',messages)
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages.length!==0 && messages.map((message)=>{
				return <Message key={message._id} message={message} />
			})}
			{loading && [...Array(3)].map((_,ind)=> <MessageSkeleton key={ind} />)}
			{!loading && messages.length===0 && (<p className='text-center text-gray-400'>No messages yet</p>)}

		</div>
	);
};
export default Messages;
