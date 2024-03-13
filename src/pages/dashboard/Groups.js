import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Groups'
import { CiSearch } from 'react-icons/ci'
import { BsGrid } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import { CgAddR } from 'react-icons/cg'
import AllGroups from '../../components/groups-page/AllGroups'
import MyGroups from '../../components/groups-page/MyGroups'
import GroupsModal from '../../components/Modals/GroupsModal'
import { useSelector } from 'react-redux';
import GroupRequest from '../../components/groups-page/GroupRequest'
import { useQuery } from '@tanstack/react-query'

const Groups = () => {
  const [activeTab, setActiveTab] = useState('Photos')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useSelector((store) => store.user);
  console.log(user)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }


  return (
    <Wrapper>
      <GroupsModal isOpen={isModalOpen} onClose={closeModal} />

      <article className='tab-content'>
        <h2>Groups</h2>
        <div className='photos-search'>
          <div className='search'>
            <CiSearch className='search-icon' />
            <input type='text' placeholder='Search groups' />
          </div>
          {
            (user.userType === "admin" || user.userType === "super-admin") &&
            <div className='btn-primary' onClick={openModal}>
              <CgAddR className='icon' />
              <button onClick={openModal}>Create New Group</button>
            </div>
          }

        </div>
      </article>

      <article>
        <section className='tabs'>
          <div className='groups'>
            <div
              onClick={() => setActiveTab('Photos')}
              className={`tab-btn ${activeTab === 'Photos' ? 'active' : ''}`}
            >
              <h4>
                All Groups <span className='number'>12</span>
              </h4>
            </div>
            <div
              onClick={() => setActiveTab('my-groups')}
              className={`tab-btn ${activeTab === 'my-groups' ? 'active' : ''}`}
            >
              <h4>
                My Groups <span className='number-grey'> 1</span>
              </h4>
            </div>

            {
              (user.userType === "admin" || user.userType === "super-admin") &&
              <div
                onClick={() => setActiveTab('group-request')}
                className={`tab-btn ${activeTab === 'group-request' ? 'active' : ''
                  }`}
              >
                <h4>
                  Group Request <span className='number-grey'> 3</span>
                </h4>
              </div>
            }

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
          {activeTab === 'Photos' && <AllGroups />}
          {activeTab === 'my-groups' && <MyGroups />}
          {activeTab === 'group-request' && <GroupRequest />}
        </section>
      </article>
    </Wrapper>
  )
}

export default Groups
