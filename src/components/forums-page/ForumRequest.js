import React from 'react'
import { MdOutlineCheckBox } from 'react-icons/md'
import { CgCloseR } from 'react-icons/cg'
import { useState } from 'react'
import ForumRequestModal from '../Modals/ForumRequestModal'

const ForumRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <article className='all-groups'>
      {isModalOpen && <ForumRequestModal onClose={closeModal} />}
      <section>
        <div className='content'>
          <div>
            <h5>Singles and Married Counseling </h5>
            <p>
              Privacy <span className='span-bold'> Public</span> | Author:{' '}
              <span className='span-bold'>Joseph Tsenum</span>
            </p>
            <p>
              <span className='span-bold'>Description: </span>A group made to
              have an interfacing between single...{' '}
              <span className='see-more' onClick={openModal}>
                See more
              </span>
            </p>
          </div>
        </div>
        <div className='cta-flex'>
          <button className='member'>
            <MdOutlineCheckBox className='icon' />
            Approve
          </button>
          <button className='member red'>
            <CgCloseR className='icon' />
            Decline
          </button>
        </div>
      </section>
    </article>
  )
}

export default ForumRequest
