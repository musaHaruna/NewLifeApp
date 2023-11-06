import React from 'react'
import GenericModal from './GenericModal'
import Wrapper from '../../assets/wrappers/GroupsModal'
import { CgCloseR } from 'react-icons/cg'
import { useState } from 'react'
import SuccessModal from './SuccessModal'

const EditEducationModal = ({ isOpen, onClose }) => {
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
          <h3>Add Education</h3>
          <CgCloseR onClick={onClose} className='icon' />
        </div>

        <form>
          <p>
            <span className='asterix'>*</span> indicates fields that are
            compulsory.
          </p>
          <div>
            <label>
              School <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Enter name of school' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              Degree <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Enter degree' />
            <p className='error'></p>
          </div>
          <div>
            <label>Course/Field of study</label>
            <input type='text' placeholder='Course/Field of study' />
            <p className='error'></p>
          </div>

          <div>
            <label>
              Start date <span className='asterix'>*</span>
            </label>
            <input type='date' placeholder='start date' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              End date (or expected graduation){' '}
              <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='select date' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              Country <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Enter Country' />
            <p className='error'></p>
          </div>
          <div>
            <label>
              City <span className='asterix'>*</span>
            </label>
            <input type='text' placeholder='Enter city' />
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

export default EditEducationModal
