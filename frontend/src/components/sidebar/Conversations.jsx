import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	 const {loading,conversations}=useGetConversations()
	 console.log("CONVERSATIONS:",conversations)
	return (
		<div className='py-2 flex flex-col overflow-auto'>

     {conversations.map((conversation,ind)=>{
			return <Conversation
			 key={conversation._id}
			 conversation={conversation}
			 emoji={getRandomEmoji()}
       lastInd={ind===conversations.length-1}
			/>
		 })}


			{loading ? <span className='loading loading-spinner mx-auto'></span>:null}
		</div>
	);
};
export default Conversations;
