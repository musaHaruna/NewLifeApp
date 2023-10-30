import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Groups'
import { CiSearch } from 'react-icons/ci'
import { BsGrid } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import { CgAddR } from 'react-icons/cg'
import AllGroups from '../../components/groups-page/AllGroups'
import MyGroups from '../../components/groups-page/MyGroups'

const Members = () => {
  const [activeTab, setActiveTab] = useState('Photos')

  return (
    <Wrapper>
      <article className='tab-content'>
        <h2>Members</h2>
      </article>

      <article>
        <section className='tabs'>
          <div className='groups'>
            <div
              onClick={() => setActiveTab('Photos')}
              className={`tab-btn ${activeTab === 'Photos' ? 'active' : ''}`}
            >
              <h4>
                All Members <span className='number'>12</span>
              </h4>
            </div>
            <div
              onClick={() => setActiveTab('my-groups')}
              className={`tab-btn ${activeTab === 'my-groups' ? 'active' : ''}`}
            >
              <h4>
                My Connections <span className='number-grey'> 1</span>
              </h4>
            </div>
          </div>
        </section>

        <section>
          {activeTab === 'Photos' && <AllGroups />}
          {activeTab === 'my-groups' && <MyGroups />}
        </section>
      </article>
    </Wrapper>
  )
}

export default Members
