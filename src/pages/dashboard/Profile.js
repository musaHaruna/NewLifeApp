import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Profile'
import { CiUser } from 'react-icons/ci'
import profileBg from '../../assets/images/profile-bg.png'
import profile from '../../assets/images/profile.png'
import MyActivity from '../../components/profile-page/MyActivity'
import MyDetails from '../../components/profile-page/MyDetails'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('all-members')

  return (
    <Wrapper>
      <article>
        <div>
          <img src={profileBg} alt='' />
        </div>
        <section className='profile-summary'>
          <div className='profile-image'> 
            <img src={profile} alt='' />
          </div>
          <div > 
            <h3 className='profile-name'>Luper Joseph</h3>
            <p className='profile-infor'>
              @luperjoe360 | Joined May 2023 | <span className='active-now'>Active now</span>
            </p>
            <div className='connections'>
              <div className='connectors'>
                <CiUser className='icon' />
              </div>

              <p>25 connections</p>
            </div>
          </div>
        </section>
      </article>

      <article className='members-container'>
        <section className='tabs'>
          <div className='groups'>
            <div
              onClick={() => setActiveTab('all-members')}
              className={`tab-btn ${
                activeTab === 'all-members' ? 'active' : ''
              }`}
            >
              <h4>My Details</h4>
            </div>
            <div
              onClick={() => setActiveTab('my-connections')}
              className={`tab-btn ${
                activeTab === 'my-connections' ? 'active' : ''
              }`}
            >
              <h4>My Activity</h4>
            </div>
          </div>
        </section>

        <section>
          {activeTab === 'all-members' && <MyDetails />}
          {activeTab === 'my-connections' && <MyActivity />}
        </section>
      </article>
    </Wrapper>
  )
}

export default Profile
