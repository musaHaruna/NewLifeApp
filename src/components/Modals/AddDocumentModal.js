import React from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { MdInsertPhoto } from 'react-icons/md'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import user from '../../services/api/user'

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
  const [selecteDocument, setSelectedDocument] = useState(null)

  const handleDocumentChange = (e) => {
    setSelectedDocument(e.target.files[0])
  }

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value)
  }

  const handleDocumentTitleChange = (event) => {
    setDocumentTitle(event.target.value)
  }
  const [selectedVisibility, setSelectedVisibility] = useState('public')

  const handleVisibilityChange = (event) => {
    setSelectedVisibility(event.target.value)
  }

  console.log()

  console.log(selectedVisibility)
  const handleDocumentUpload = async (e) => {
    e.preventDefault()
    if (selecteDocument) {
      const formData = new FormData()
      formData.append('document', selecteDocument)
      formData.append('name', documentTitle)
      formData.append('group', '65df41fbcd5c97c1ab22b042')
      formData.append('visibilty', selectedVisibility.toLowerCase())

      try {
        await documentMutation.mutateAsync(formData)
        selecteDocument(null) // Reset selected file after upload
      } catch (error) {
        console.log(error)
      }
    }
  }

  const documentMutation = useMutation({
    mutationFn: user.uploadDocument,
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
          <h3>Add Document</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleDocumentUpload}>
          <div class='custom-file-upload'>
            <input type='file' id='upload' onChange={handleDocumentChange} />
            <label for='upload'>
              {selecteDocument ? 'File ready for upload' : 'Upload Photo'}{' '}
            </label>
          </div>
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
          <button className='action-btn' type='submit'>
            Upload Document
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddDocumentModal
