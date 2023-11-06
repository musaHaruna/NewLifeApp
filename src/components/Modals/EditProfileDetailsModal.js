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
          <p>
            <span className='asterix'>*</span> indicates fields that are
            compulsory.
          </p>
          <div>
            <label>
              First name <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Luper' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              Second name <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Tsenum' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              Last name <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Joseph' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              Username <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='@joe.com' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              Date of Birth <span className='asterix'>*</span>
            </label>
            <input type='date' placeholder='' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              Country <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='USA' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              City <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Georgia' />
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

export default EditProfileDetailsModal
