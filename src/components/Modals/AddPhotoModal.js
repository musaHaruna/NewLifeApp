import React from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { MdInsertPhoto } from 'react-icons/md'

const AddPhotoModal = ({ onClose, message }) => {
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
  return (
    <Wrapper style={modalStyle}>
      <div style={contentStyle}>
        <div className='heading'>
          <h3>Add Photo</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <div className='drop-box'>
          <div className='photo-icon'>
            <MdInsertPhoto />
          </div>
          <p>Drag your photo here or click Upload to add photo</p>
          <div class='custom-file-upload'>
            <input type='file' id='upload' />
            <label for='upload'>Upload Photo</label>
          </div>
        </div>
        <button className='action-btn'>Upload Document</button>
      </div>
    </Wrapper>
  )
}

export default AddPhotoModal
