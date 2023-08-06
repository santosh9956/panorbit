import React, { useState } from 'react'
import UserDetailsLeftView from './UserDetailsLeftView';
import UserDetailsRightSideView from './UserDetailsRightSideView';
import ChatContainer from './Chat/ChatContainer';

const SelectedUserDetails = (props) => {
    const { selectedUserDetail,userList, setSelectedUserDetail } = props;
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
        return (
        <>
            <div className="selected_user_detail_container d_flex">
                <UserDetailsLeftView  setSelectedOptionIndex={setSelectedOptionIndex} selectedOptionIndex={selectedOptionIndex}  />
                <UserDetailsRightSideView setSelectedUserDetail={setSelectedUserDetail}  userList={userList} selectedOptionIndex={selectedOptionIndex} selectedUserDetail={selectedUserDetail} />
                <ChatContainer userList={userList} />
            </div>
            <style jsx>{`
                .selected_user_detail_container{
                    height: 100vh;
                    padding:  3rem ;
                }

            `}</style>
        </>
        )
}

export default SelectedUserDetails;