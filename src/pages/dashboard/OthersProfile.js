import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Profile'
import { CiUser } from 'react-icons/ci'
import profileBg from '../../assets/images/profile-bg.png'
import profile from '../../assets/images/profile.png'
import MyActivity from '../../components/profile-page/MyActivity'
import MyDetails from '../../components/profile-page/MyDetails'
import { useSelector } from "react-redux";

const OthersProfile = () => {

    return (
        <Wrapper>
            <article>
                <div>
                    <img src={profileBg} alt='' />
                </div>
                <section className='profile-summary'>
                    <div className='profile-image'>
                        <img src={user?.photo || profile} alt='' className='img' />
                    </div>
                    <div >
                        <h3 className='profile-name'>{user?.full_name}</h3>
                        <p className='profile-infor'>
                            @{user?.user_name} | Joined {new Date(user?.createdAt).toLocaleString('en-US', { month: 'long', year: 'numeric' })} | <span className='active-now'>Active now</span>
                        </p>
                        <div className='connections'>
                            <div className='connectors'>
                                <CiUser className='icon' />
                            </div>

                            <p>{user?.connections?.length || 0} connection{user?.connections?.length == 1 ? "" : "s"}</p>
                        </div>
                    </div>
                </section>
            </article>

            <article className='members-container'>
                <section>
                    {activeTab === 'all-members' && <MyDetails user={user} />}
                </section>
            </article>
        </Wrapper>
    )
}

export default OthersProfile
