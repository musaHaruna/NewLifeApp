import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { RiFileListLine } from 'react-icons/ri'

const AddEventModal = ({ onClose, message }) => {
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
    height: '500px',
    margin: 'auto',

    marginTop: '2%',
    overflowY: 'scroll',
    borderRadius: '5px',
    padding: '1.5rem',
  }

  const [titleOfPublications, setTitleOfPublications] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  const [titleOfEvent, setTitleOfEvent] = useState('')
  const [eventType, setEventType] = useState('')

  const handleTitleChange = (event) => {
    setTitleOfEvent(event.target.value)
  }

  const handleEventChange = (event) => {
    setEventType(event.target.value)
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
            Title of Event
            <input
              type='text'
              placeholder='Enter title here'
              value={titleOfEvent}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            Category
            <select value={eventType} onChange={handleEventChange}>
              <option value='group1'>Category 1</option>
              <option value='group2'>Category 2</option>
              <option value='group3'>Category 3</option>
            </select>
          </label>
          <div className='event-flex'>
            <label>
              Event Date
              <input type='date' />
            </label>
            <label>
              Event Time
              <div className='input-flex'>
                <input type='text' placeholder='--:--' /> to
                <input type='text' placeholder='--:--' />
              </div>
            </label>
          </div>
          <label className='summary-text'>
            Summary of text
            <p>Summary can include every details of the event.</p>
            <textarea type='text' placeholder='Write here' />
          </label>

          <div class='custom-file-upload file'>
            <input type='file' id='upload' />
            <RiFileListLine />
            <label for='upload'>Choose File</label>
          </div>
          <p className='p-info'>
            You can upload cover photo/ flyer in (jpg, png). Maximum file size
            is 10mb.
          </p>
          <button className='action-btn'>Add Event</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddEventModal
