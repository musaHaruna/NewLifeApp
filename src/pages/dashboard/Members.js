import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Members'
import { BsGrid } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import MyGroups from '../../components/groups-page/MyGroups'
import AllMembers from '../../components/members-page/AllMembers'
import MyConnections from '../../components/members-page/MyConnections'

const Members = () => {
  const [activeTab, setActiveTab] = useState('all-members')

  return (
    <Wrapper>
      <article className='tab-content'>
        <h2>Members</h2>
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
              <h4>
                All Members <span className='number'>12</span>
              </h4>
            </div>
            <div
              onClick={() => setActiveTab('my-connections')}
              className={`tab-btn ${
                activeTab === 'my-connections' ? 'active' : ''
              }`}
            >
              <h4>
                My Connections <span className='number-grey'> 1</span>
              </h4>
            </div>
          </div>
          <div className='displays'>
            <div>
              <BsGrid />
            </div>
            <div>
              <HiBars3 className='bars' />
            </div>
          </div>
        </section>

        <section>
          {activeTab === 'all-members' && <AllMembers />}
          {activeTab === 'my-connections' && <MyConnections />}
        </section>
        <section className='pagination'>
          <p>showing 1-20 of 260 members</p>

          <div className='pagination-btns'>
            <button className='active'>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>13</button>
            <button className='next-btn'>{'>'}</button>
          </div>
        </section>
      </article>
    </Wrapper>
  )
}

export default Members
