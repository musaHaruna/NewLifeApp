import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { RiFileListLine } from 'react-icons/ri'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import user from '../../services/api/user'
import { RotatingLines } from 'react-loader-spinner'

const CreatePollModal = ({ onClose, message }) => {
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
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('group1') // default value for Category 1
  const [eventDate, setEventDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [summary, setSummary] = useState('')

  const [selectedDocument, setSelectedDocument] = useState(null)

  const handleDocumentChange = (e) => {
    setSelectedDocument(e.target.files[0])
  }

  const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9](am|pm)$/i

  const handleEventUpload = async (e) => {
    e.preventDefault()

    if (!title) {
      toast.error('Title is required.')
      return
    }

    if (!category) {
      toast.error('Category is required.')
      return
    }

    if (!eventDate) {
      toast.error('Event date is required.')
      return
    }

    if (!timeRegex.test(startTime)) {
      toast.error('Invalid start time format. Please use HH:mmam/pm.')
      return
    }

    if (!timeRegex.test(endTime)) {
      toast.error('Invalid end time format. Please use HH:mmam/pm.')
      return
    }

    if (!summary) {
      toast.error('Summary is required.')
      return
    }

    if (!selectedDocument) {
      toast.error('Please select a document.')
      return
    }
    if (selectedDocument) {
      const formData = new FormData()
      formData.append('image', selectedDocument)
      formData.append('title', title)
      formData.append('type', category)
      formData.append('eventDate', eventDate)
      formData.append('startTime', startTime)
      formData.append('endTime', endTime)
      formData.append('summary', summary)

      try {
        await eventMutation.mutateAsync(formData)
        setSelectedDocument(null)
        onClose()
        // Reset selected file after upload
      } catch (error) {
        console.log(error)
      }
    }
  }

  const eventMutation = useMutation({
    mutationFn: user.uploadEvents,
    queryKey: ['get-upload-events'],
    onSuccess: (data) => {
      toast.success('Document uploaded successfully')
    },
    onError: (error) => {
      console.error('Error:', error)
      toast.error(error?.message || 'An error occurred during document upload')
    },
  })

  return (
    <Wrapper style={modalStyle}>
      <div style={contentStyle}>
        <div className='heading'>
          <h3>Create Poll</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={handleEventUpload}>
          <label>
            Title of poll
            <input
              type='text'
              placeholder='Enter title here'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className='summary-text'>
            Description of poll
            <p>Give a description to the poll.</p>
            <textarea
              type='text'
              placeholder='Write here'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </label>
          <label>
            Answer options
            <input
              type='text'
              placeholder='Option 1'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type='text'
              placeholder='Option 2'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <button className='action-btn' type='sumbit'>
            {eventMutation.isPending ? (
              <RotatingLines
                type='Oval'
                style={{ color: '#fff' }}
                height={20}
                width={20}
              />
            ) : (
              <>Create Poll</>
            )}
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default CreatePollModal
