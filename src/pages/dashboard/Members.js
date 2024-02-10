import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Members'
import { BsGrid } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import MyGroups from '../../components/groups-page/MyGroups'
import AllMembers from '../../components/members-page/AllMembers'
import MyConnections from '../../components/members-page/MyConnections'
import { useQuery } from '@tanstack/react-query'
import user from '../../services/api/user'
import { RotatingLines } from 'react-loader-spinner'

const Members = () => {
  const [activeTab, setActiveTab] = useState('all-members')

  const members = useQuery({
    queryKey: ['get-members'],
    queryFn: user.getMembers,
  })
  const totalMembers = members?.data?.members.reduce(
    (sum, member) => sum + 1,
    0
  )

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
                All Members <span className='number'>{totalMembers}</span>
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
          {activeTab === 'all-members' && <AllMembers members={members} />}
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
