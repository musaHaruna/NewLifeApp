import React from 'react'
import GenericModal from './GenericModal'
import Wrapper from '../../assets/wrappers/GroupsModal'
import { CgCloseR } from 'react-icons/cg'
import { useState } from 'react'
import SuccessModal from './SuccessModal'

const EditProfileDetailsModal = ({ isOpen, onClose }) => {
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
          <h3>Edit Personal Details</h3>
          <CgCloseR onClick={onClose} className='icon' />
        </div>

        <form>
          <p className='note'>
            Fill in details of the forum you want to create, also indicate if
            you wan it private or public. Approval for the forum should take a
            maximum of 72 hours
          </p>
          <div>
            <label>Title of forum</label>
            <input type='text' placeholder='Enter title here' />
            <p className='error'></p>
          </div>
          <div>
            <label>Privacy</label>
            <select>
              <option value='Select privacy'>Select privacy</option>
              <option value='Public'>Public</option>
              <option value='Private'>Private</option>
            </select>
          </div>
          <div>
            <label>Description (What will the forum be about)</label>
            <textarea type='text' placeholder='Enter title here' />
            <p>0/2000</p>
            <p className='error'></p>
          </div>
          <div className='btn'>
            <button onClick={openSuccessModal}>Create Group</button>
          </div>
        </form>
        {isSuccessModalOpen ? (
          <SuccessModal onClose={closeSuccessModal} />
        ) : null}
      </Wrapper>
    </GenericModal>
  )
}

export default EditProfileDetailsModal
