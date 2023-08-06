import React from 'react';
import OutsideAlerter from '../OutSideAlerter';

const Signout = (props) => {
    const { isOpen , onClose, selectedUserDetail, userList, setSelectedUserDetail} = props;
    return (
        <>
            <div>
                <OutsideAlerter isOpen={isOpen} onClose={() => onClose()} >
                    <div className="signout_modal_wrapper d_flex flex_column">
                        <img  className='signout_user_profile_picture'  src={selectedUserDetail.profilepicture} alt='user_profile_picture' />
                        <div className="selected_username_name_container">
                            <h2 className='signout_user_name text_center'>{selectedUserDetail.name}</h2>
                            <p className='text_center'>{selectedUserDetail.username}</p>
                        </div>
                        <div className="other_userlist_container">
                                {
                                    userList.map(data => (
                                        <div key={data.id} className="other_user_detail_container d_flex align_items_center">
                                            <img className='other_user_profilepicture' src={data.profilepicture} alt='other_user_profilepicture' />
                                            <p className="other_user_name">{data.name}</p>
                                        </div>
                                    ))
                                }
                        </div>
                        <div className="signout_button_wrapper">
                            <button onClick={() => setSelectedUserDetail(null)} className='cursor_pointer signout_button'>Sign out</button>
                        </div>
                    </div>
                </OutsideAlerter>
            </div>
            <style jsx>{`
                .signout_modal_wrapper{
                    min-width: 200px;
                    background: #fff;
                    padding: 2rem 1.5rem;
                    border-radius: 1.5rem;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    position: relative;
                    z-index: 999999;
                }

                .signout_user_profile_picture{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    margin: 0 auto;
                }
            
                .other_userlist_container{
                    height: 120px;
                    overflow-y: scroll;
                }

                .other_user_detail_container{
                    padding: 1rem 0;
                    border-top: 2px solid rgb(206 206 206);
                }

                .other_user_profilepicture{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .signout_button_wrapper{
                    padding: 1rem 0 0 ;
                    display: flex;
                }

                .selected_username_name_container{
                    padding: 1rem 0;
                }

                .signout_button{
                    background: #d55251;
                    border-radius: 1.5rem;
                    outline: none;
                    border:none;
                    padding: 0.5rem 1rem;
                    color: #fff;
                    margin: 0 auto;
                }

                .other_user_name{
                    margin-left: 1rem;
                }
            `}</style>
        </>
    )
}

export default Signout;