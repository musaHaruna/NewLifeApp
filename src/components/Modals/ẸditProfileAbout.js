import React from 'react'
import GenericModal from './GenericModal'
import Wrapper from '../../assets/wrappers/GroupsModal'
import { CgCloseR } from 'react-icons/cg'
import { useState } from 'react'
import SuccessModal from './SuccessModal'

const EditProfileAbout = ({ isOpen, onClose }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const openSuccessModal = (e) => {
    e.preventDefault()
    setIsSuccessModalOpen(true)
  }
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false)
    onClose()
  }
  return (
    <GenericModal isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <div className='heading'>
          <h3>Edit About</h3>
          <CgCloseR onClick={onClose} className='icon' />
        </div>

        <form>
          <p>
            Write a brief about yourself, this allows those who would love to
            connect to you, know you more. Your brief can include your research
            interests, hobbies, and top skills.
          </p>
          <div>
            <label>Description (What will the forum be about)</label>
            <textarea type='text' placeholder='Enter title here' />
            <p>0/2000</p>
            <p className='error'></p>
          </div>
          <div className='btn'>
            <button onClick={openSuccessModal}>Save</button>
          </div>
        </form>
        {isSuccessModalOpen ? (
          <SuccessModal onClose={closeSuccessModal} />
        ) : null}
      </Wrapper>
    </GenericModal>
  )
}

export default EditProfileAbout
