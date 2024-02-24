import React from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

const AddDocumentModal = ({ onClose, message }) => {
  const modalStyle = {
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const contentStyle = {
    backgroundColor: 'white',
    width: '30%',
    margin: 'auto',
    marginTop: '5%',
    overflow: 'hidden',
    borderRadius: '5px',
    padding: '1.5rem',
  }

  const [selectedGroup, setSelectedGroup] = useState('')
  const [documentTitle, setDocumentTitle] = useState('')

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value)
  }

  const handleDocumentTitleChange = (event) => {
    setDocumentTitle(event.target.value)
  }
  const [selectedVisibility, setSelectedVisibility] = useState('')

  const handleVisibilityChange = (event) => {
    setSelectedVisibility(event.target.value)
  }

  return (
    <Wrapper style={modalStyle}>
      <div style={contentStyle}>
        <div className='heading'>
          <h3>Add Document</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <form>
          <label>
            Title of Document
            <input
              type='text'
              placeholder='Enter title here'
              value={documentTitle}
              onChange={handleDocumentTitleChange}
            />
          </label>
          <label>
            Group to upload to
            <select value={selectedGroup} onChange={handleGroupChange}>
              <option value='group1'>Group 1</option>
              <option value='group2'>Group 2</option>
              <option value='group3'>Group 3</option>
            </select>
          </label>

          <label>
            Visibility
            <select
              value={selectedVisibility}
              onChange={handleVisibilityChange}
            >
              <option value='public'>Public</option>
              <option value='private'>Private</option>
            </select>
          </label>
          <button className='action-btn'>Upload Document</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddDocumentModal
