import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Events'
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from 'react-icons/io'
import { RiHotspotLine } from 'react-icons/ri'
import { CiSearch } from 'react-icons/ci'
import { CgAddR } from 'react-icons/cg'
import { BsImage } from 'react-icons/bs'
import AddFundingModal from '../../components/Modals/AddFundingModal'
import { useQuery } from '@tanstack/react-query'
import user from '../../services/api/user'
import SkeletonArticle from '../../components/skeletons/SkeletonArticle'

const Fundings = () => {
  const [activeTab, setActiveTab] = useState('all-members')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAddFundingModalOpen, setIsAddFundingModalOpen] = useState(false)
  const closeAddFundingModal = () => {
    setIsAddFundingModalOpen(false)
  }
  const options = { month: 'long', day: 'numeric' }

  const openAddFundingModal = () => {
    setIsAddFundingModalOpen(true)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const getFundings = useQuery({
    queryKey: ['get-fundings'],
    queryFn: user.getFundings,
  })
  console.log(getFundings)

  return (
    <Wrapper>
      {isAddFundingModalOpen && (
        <AddFundingModal onClose={closeAddFundingModal} />
      )}

      <article className='tab-content'>
        <h2>Fundings</h2>
        <div className='photos-search'>
          <div className='search'>
            <CiSearch className='search-icon' />
            <input type='text' placeholder='Search funding' />
          </div>
          <div className='btn-primary '>
            <CgAddR className='icon' />
            <button onClick={openAddFundingModal}>Create New Forum</button>
          </div>
        </div>
      </article>

      <article className='members-container'>
        <section className='tabs'>
          <div className='groups'>
            <div>
              <h4 className='today'>Today</h4>
            </div>
            <div>
              <h4 className='upcoming'>
                Upcoming
                <IoIosArrowDown />
              </h4>
            </div>
          </div>
          <div className='displays'>
            <div>
              <IoIosArrowBack />
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </section>

        {getFundings.isPending ? (
          [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme='light' />)
        ) : (
          <section className='event-container'>
            <section>
              {getFundings?.data?.fundings?.map((event, index) => (
                <section className='events' key={index}>
                  <div className='event-content'>
                    <p>
                      {new Date(event.createdAt).toLocaleDateString(
                        'en-US',
                        options
                      )}{' '}
                    </p>
                    <h5>{event.title}</h5>
                    <p className='summary'>{event.summary}</p>
                  </div>
                  <div className='picture'>
                    <img src={event.url} alt='' />
                  </div>
                </section>
              ))}
            </section>
            <div className='nav-btns'>
              <p>Older</p>
              <p>Newer</p>
            </div>
          </section>
        )}
      </article>
    </Wrapper>
  )
}

export default Fundings
