import React from 'react';

const UserList = (props) => {
    const { userList, setSelectedUserDetail } = props;

    // function to select any user from the list
    const userProfileClick = (data) => {
        setSelectedUserDetail(data);
    }

    return (
        <>
        <div className="user_list_container d_flex justify_content_center align_items_center">
            <div className="user_list_modal overflow_hidden ">
                <div className="modal_heading_text">
                    <h2 className='text_center'>{'Select an account'}</h2>
                </div>
                <div className="modal_listing">
                    {
                        userList.length > 0 && userList.map((data) => (
                            <div onClick={() => userProfileClick(data)} key={data.id} className="user_list_profile d_flex align_items_center cursor_pointer">
                                <img className='user_profile_picture' src={data.profilepicture} alt='user_profile_picture' />
                                <p className="user_name">{data.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <style jsx>{`
            .user_list_container{
                width: 100vw;
                height: 100vh;
            }

            .modal_heading_text{
                padding: 2rem 0;
                background: #f6f6f6;
            }

            .user_list_modal{
                min-width: 600px;
                padding-bottom: 1.5rem;
                border-radius: 2.5rem;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }

            .modal_listing{
                height: 400px;
                padding: 1.5rem 2rem;
                overflow-y: auto;
            }

            .user_list_profile{
                padding: 0.5rem 0;
                border-bottom: 1px solid #e5e5e5;
            }

            .user_profile_picture{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 1rem;
            }
        
        `}</style>
        </>
    )
}

export default UserList;