import React from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

const AddUsefulLinks = ({ onClose, message }) => {
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

  const [url, setUrl] = useState('')
  const [linkTitle, setLinkTitle] = useState('')

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleLinkTitleChange = (event) => {
    setLinkTitle(event.target.value)
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
            Title of Link
            <input
              type='text'
              placeholder='Enter title here'
              value={linkTitle}
              onChange={handleLinkTitleChange}
            />
          </label>
          <label>
            Enter URL
            <input
              type='text'
              placeholder='Enter URL'
              value={url}
              onChange={handleUrlChange}
            />
          </label>

          <button className='action-btn'>Upload Document</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddUsefulLinks
