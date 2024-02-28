import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { RiFileListLine } from 'react-icons/ri'

const AddPublicationsModal = ({ onClose, message }) => {
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
    width: '35%',
    margin: 'auto',
    marginTop: '2%',
    overflow: 'hidden',
    borderRadius: '5px',
    padding: '1.5rem',
  }

  const [titleOfPublications, setTitleOfPublications] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  const handleTitleChange = (event) => {
    setTitleOfPublications(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }

  return (
    <Wrapper style={modalStyle}>
      <div style={contentStyle}>
        <div className='heading'>
          <h3>Add Publications/Research</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <form>
          <label>
            Title of Publications
            <input
              type='text'
              placeholder='Enter title here'
              value={titleOfPublications}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            Category
            <select value={category} onChange={handleCategoryChange}>
              <option value='group1'>Category 1</option>
              <option value='group2'>Category 2</option>
              <option value='group3'>Category 3</option>
            </select>
          </label>

          <label>
            Type
            <select value={type} onChange={handleTypeChange}>
              <option value='public'>Public</option>
              <option value='private'>Private</option>
            </select>
          </label>
          <div class='custom-file-upload file'>
            <input type='file' id='upload' />
            <RiFileListLine />
            <label for='upload'>Choose File</label>
          </div>
          <p className='p-info'>
            You can upload files in (pdf,doc,docx,txt). Maximum file size is
            30mb.
          </p>
          <button className='action-btn'>Upload Document</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddPublicationsModal
