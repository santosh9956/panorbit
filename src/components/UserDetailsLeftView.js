import React, { useState } from 'react'
import { leftSideOptions } from '../lib/staticData';

const UserDetailsLeftView = (props) => {
    const { selectedOptionIndex, setSelectedOptionIndex} = props;
  return (
    <>
    <div className="user_details_left_view_wrapper d_flex justify_content_center align_items_center h_100">
        <div className="user_details_options_wrapper w_100">
            {
                leftSideOptions.map(data => (
                    <div onClick={() => setSelectedOptionIndex(data.id - 1)} key={data.id} className="user_details_option cursor_pointer">
                        <p className={`${(selectedOptionIndex === (data.id - 1)) ? 'active_option' : '' } option_color` } >{data.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
    <style jsx>{`
        .user_details_left_view_wrapper{
            background-color: rgb(89 64 199);
            min-width: 14rem;
            min-height: 80vh;
            border-radius: 2rem;
            padding: 2rem;
        }

        .user_details_option{
            padding: 1rem 0;
            border-bottom: 1px solid rgb(166 164 228);
        }

        .option_color{
            color:  rgb(166 164 228);
        }

        .active_option{
            color: #fff;
            font-weight: 700;
        }

    `}</style>
    </>
  )
}

export default UserDetailsLeftView;