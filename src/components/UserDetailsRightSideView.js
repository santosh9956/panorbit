import React, { useState } from 'react'
import { leftSideOptions } from '../lib/staticData';
import {
    MapContainer,
    TileLayer,
    useMap,
  } from 'https://cdn.esm.sh/react-leaflet';
import MapComponent from './MapComponent';
import Signout from './Modal/Signout';
  

const UserDetailsRightSideView = (props) => {
    const {selectedOptionIndex, selectedUserDetail, userList, setSelectedUserDetail} = props;
    const [isSignupModal, setIsSignupModal] = useState(false);

    const showUserProfile = () => {
        if (!selectedOptionIndex) {
            return(
                <div className='d_flex profile_info_address_container w_100'>
                    <div className="profile_info_container d_flex flex_column">
                        <img className='user_main_profile_picture' src={selectedUserDetail.profilepicture} alt='user_big_profile_pic' />
                        <h2 className='text_center'>{selectedUserDetail.name}</h2>
                        <div className="personal_info_container custom_border_bottom">
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">Username</p> : <p className="personal_info_type_sol">{selectedUserDetail.username}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">e-mail</p> : <p className="personal_info_type_sol">{selectedUserDetail.email}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">Phone</p> : <p className="personal_info_type_sol">{selectedUserDetail.phone}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">Website</p> : <p className="personal_info_type_sol">{selectedUserDetail.website}</p>
                            </div>
                        </div>
                        <div className="personal_info_container">
                            <h3 className="personal_info_heading_text text_center">{'Company'}</h3>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">Name</p> : <p className="personal_info_type_sol">{selectedUserDetail.company.name}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">catchphrase</p> : <p className="personal_info_type_sol">{selectedUserDetail.company.catchPhrase}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">bs</p> : <p className="personal_info_type_sol">{selectedUserDetail.company.bs}</p>
                            </div>
                        </div>
                    </div>
                    <div className="user_address_container w_100">
                        <div className="personal_info_container">
                            <h3 className="personal_info_heading_text ">{'Address'}</h3>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">Street</p> : <p className="personal_info_type_sol">{selectedUserDetail.address.street}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">suite</p> : <p className="personal_info_type_sol">{selectedUserDetail.address.suite}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">city</p> : <p className="personal_info_type_sol">{selectedUserDetail.address.city}</p>
                            </div>
                            <div className="d_flex personal_info_type_wrapper">
                                <p className="personal_info_type">Zipcode</p> : <p className="personal_info_type_sol">{selectedUserDetail.address.zipcode}</p>
                            </div>
                        </div>
                        <div className="map_container">
                            <MapComponent lat={selectedUserDetail.address.geo.lat} long={selectedUserDetail.address.geo.lng} />
                            <div className="d_flex lat_lng_container">
                                <p className='lat_lng_text'>Lat: <b>{selectedUserDetail.address.geo.lat}</b> </p>
                                <p className='lat_lng_text'>Long: <b>{selectedUserDetail.address.geo.lng}</b> </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <h2 className='coming_soon_text'>{'Coming Soon'}</h2>
            )
        }
    }

    console.log(isSignupModal, 'isSignpumodal-');

    return (
        <>
        <section className="user_detail_right_side_wrapper w_100 h_100">
            <div className="user_detail_right_side_header d_flex align_items_center justify_content_between position_relative">
                <p className="right_side_title">{leftSideOptions[selectedOptionIndex].title}</p>
                <div onClick={() => setIsSignupModal(true)} className="user_profile_info d_flex align_items_center cursor_pointer">
                    <img className='user_profile_picture_header' src={selectedUserDetail?.profilepicture} alt="user_profile_picture_header" />
                    <span className='user_name'>{selectedUserDetail.name}</span>
                </div>
                <div className="signout_modal">
                    {
                        isSignupModal && 
                        <Signout setSelectedUserDetail={setSelectedUserDetail} userList={userList} selectedUserDetail={selectedUserDetail} onClose={() => setIsSignupModal(false)} isOpen={isSignupModal} />
                    }
                </div>  
            </div>
            <div className="right_body_container w_100 h_100 d_flex">
                {
                    showUserProfile()
                }
            </div>
        </section>
        <style jsx>{`

            .signout_modal{
                position: absolute;
                right: 0;
                top: 50px;
            }
        
            .user_detail_right_side_wrapper{
                padding: 1.5rem 2rem ;
            }

            .user_detail_right_side_header{
                padding-bottom: 1.5rem;
                border-bottom: 2px solid rgb(206 206 206);
            }

            .user_name{
                margin-left: 1rem;
            }

            .coming_soon_text{
                margin: auto;
                font-size: 80px;
                color: #0101011c;
            }

            .user_profile_picture_header{
                width: 40px;
                height: 40px;
                border-radius:50%;
                object-fit: cover;
            }
            
            .profile_info_address_container{
                    // padding: 0 2rem;
                    margin: 2rem 0;

            }

            .user_main_profile_picture{
                width: 180px;
                height: 180px;
                border-radius: 50%;
                object-fit: cover;
                margin:0 auto 1rem;
            }

            .personal_info_container{
                padding-top: 1rem;
            }

            .personal_info_type{
                width: 5rem;
                color: rgb(154 154 154);
                text-align: end;
                margin-right: 0.5rem;
                word-break: break-all;
            }

            .personal_info_type_sol{
                font-weight: 700;
                margin-left: 0.5rem;
            }

            .personal_info_type_wrapper{
                padding: 0.5rem 0;
            }

            .personal_info_heading_text{
                color: rgb(154 154 154);

                padding-bottom: 1rem;
            }

            .profile_info_container{
                width: 40%;
                border-right: 2px solid rgb(206 206 206);
                padding: 0 2rem;
            }

            .custom_border_bottom{
                padding-bottom: 1rem;
                border-bottom: 2px solid rgb(206 206 206);
            }

            .user_address_container{
                padding-left: 3rem;
            }

            .map_container{
                margin-top: 2rem;
            }

            .lat_lng_container{
                padding: 1rem 0;
                gap: 1rem;
                justify-content: flex-end;
            }
            
        `}</style>
        </>
    )
}

export default UserDetailsRightSideView;