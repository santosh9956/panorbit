import React, { useState } from 'react'
import OutsideAlerter from '../OutSideAlerter';

const ChatContainer = (props) => {
    const { userList } = props;
    const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
    <OutsideAlerter isOpen={isChatOpen} onClose={() => setIsChatOpen(false)}>
        <div className="chat_wrapper">
                <div className="chat_header d_flex justify_content_between align_items_center">
                    <div className="chat_text d_flex align_items_center">
                        <img className='chat_icon_wrapper' src='/comment-regular.svg' alt='chat_icon' />
                        Chat
                    </div>
                    <img onClick={() => setIsChatOpen(!isChatOpen)} className={`chat_arrow_icon cursor_pointer ${isChatOpen ? 'down_arrow' : ''}`} src='/solid-up.svg'  alt='up_arrow' />
                </div>
                {
                    isChatOpen && 
                    <div className="chat_user_list_container ">
                        {
                            userList?.length > 0 &&  userList.map(data => (
                                <div className="chat_user d_flex align_items_center justify_content_between">
                                    <div className='d_flex align_items_center'>
                                        <img className='chat_user_profile_picture' src={data.profilepicture} alt="chat_user_profile_picture" />
                                        <p className="chat_user_name">{data.name}</p>
                                    </div>
                                    <div className={data.id % 2 === 0 ? 'active_status' : 'disable_status' }></div>
                                </div>
                            ))
                        }
                    </div>
                }
        </div>
    </OutsideAlerter>
    <style jsx>{`
        .chat_wrapper{
            position:fixed;
            bottom:0;
            right: 80px;
            z-index: 9999999;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            overflow: hidden;

        }

        .chat_header{
            padding: 0.8rem;
            background: #2b65c8;
            min-width: 250px;

        }

        .chat_text{
            color: #fff;
        }

        .chat_arrow_icon{
            filter: invert(1);
            width: 1rem;
            height: 1rem;
        }

        .chat_icon_wrapper{
            filter: invert(1);
            margin-right: 1rem;
        }

        .down_arrow{
            transform: rotate(-180deg);
        }

        .chat_user_list_container{
            background: #fff;
            height: 400px;
            overflow-y: scroll;
            padding: 1rem ;
        }

        .chat_user{
            padding: 0.5rem 0;
        }

        .chat_user_profile_picture{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }

        .chat_user_name{
            margin-left: 1rem;
        }

        .active_status{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #20aa5c;
        }

        .disable_status{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #d4d4d4;
        }
    `}</style>
    </>
  )
}

export default ChatContainer